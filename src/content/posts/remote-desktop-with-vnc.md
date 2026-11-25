---
title: "Remote Desktop with VNC"
description: "Securely reach a Linux desktop from a Mac with x11vnc over an SSH tunnel."
date: 2014-08-20
tags: ["macos", "ssh", "ubuntu", "vnc"]
---

I have been looking for a way to securely connect to the work PC that runs Ubuntu from my Macbook running Mavericks using remote desktop. The work PC is behind a firewall, so [Open NX](http://opennx.net/) was suggested, but it does not play well with OS X. So I settled for VNC over an [ssh-tunnel](http://en.wikipedia.org/wiki/Tunneling_protocol). The goal was to access the running desktop and not a clone, so I decided to use [x11vnc](http://www.karlrunge.com/x11vnc/) as the server. Alternatively, one can use [TightVNC](http://www.tightvnc.com/) to access a cloned desktop. I tried various VNC clients on Mac, and liked the oddly named [Chicken](http://sourceforge.net/projects/chicken/). But it turns out that Apple ships a VNC client with OS X; which is not very fancy, but meets my need.

The Unity desktop in Ubuntu is very slow over VNC for some reason. So, the first step is to switch to [Xfce](https://www.xfce.org) or xubuntu desktop. Also installed `x11vnc` while at it.

```
sudo apt-get install xubuntu-desktop x11vnc
```

For security, it better not to run VNC server all the time, but rather start it when needed. This can be accomplished by the following command at the terminal from the home computer (Macbook):

```
ssh -t -L 5900:localhost:5900 remote-host 'x11vnc -localhost -display :0'
```

Where `remote-host` is the work PC. The above command starts `x11vnc` in the work PC and forwards the port to the home machine. One can now connect to it by typing in another terminal,

```
open vnc://localhost
```

It is advisable to create a VNC password for the server in the `remote-host` for added security. Refer to `x11vnc` [web](http://www.karlrunge.com/x11vnc/) or man page for instructions. The above command will stop the server once the client exists, or `-forever` can be used to keep it alive. Then it will need to be stopped by `CTRL-c`.

Unfortunately, this method works only if the `remote-host` is logged in. When at the lock-screen in Ubuntu, the virtual terminal runs at display `:1` (rather than at `:0`), so the `x11vnc` will have to be started with arguments `-auth /var/run/lightdm/root/:1`. But after unlocking the session, the VT falls back to `:0`, so `x11vnc` needs to be restarted with default VT. To work around this problem, I wrote the following script:

```
#!/bin/bash
vncpa=$HOME/.vnc/passwd
vtpath=/var/run/lightdm/root
vtuser=:0
vtlock=:1
while [ -e "$vtpath/$vtlock" ]; do
   echo "screen locked"
   x11vnc -localhost -rfbauth $vncpa -display $vtlock -auth $vtpath/$vtlock
   sleep 2
done
echo "screen unlocked"
x11vnc -localhost -rfbauth $vncpa -nevershared -forever -display $vtuser -auth $vtpath/$vtuser
```

Saved it as `~/bin/x11run` and made it executable. Note that, access to the folder `/var/run/lighdtm` requires root privileges, so this script has to be run with `sudo`. So, to establish the tunnel, start the server and client in a single script, I use the ever-useful `expect` with ssh.

```
#!/bin/bash
echo -n "ID: "; read paD
sleep 5 && open vnc://localhost &
/usr/bin/expect << EOF
set timeout 120
spawn ssh -L 5900:localhost:5900 remote-host

expect "remote-host:~$ "
send "sudo ~/bin/x11run\r"

expect "*for user: "
send "$paD\r"

expect eof
interact
EOF
```

Adjust `remote-host` and the paths for your setup, and it should work!
