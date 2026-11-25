---
title: "SSH Tunnel"
description: "Make firewalls invisible with ProxyCommand, and reuse one login for many SSH sessions."
date: 2014-07-14
tags: ["ssh"]
---

Most of the systems I need to access are behind other servers that act as firewalls. This makes ssh connection a painful two step process. Luckily, `ssh-keys` can remove typing passwords and few additions to `~/.ssh/config` can make the firewall invisible.

```
Host machineA
  Compression yes
  HostName machineA.company.org
  User UserNameA

Host machineB
  ProxyCommand ssh machineA -W %h:%p
  User UserNameB
```

Here, `machineA` is the firewall and `machineB` is the server behind it. Usernames can be specified if they are different from that of the local machine. Now, typing `ssh machineB` will tunnel the connection through `machineA` automatically. However, some servers may not allow tunneling.

### Multiple SSH

One of the servers at work uses a secureID token for login, so password-less login with `ssh-key` is not an option. Opening multiple connections to this server was tedious, till I realized that SSH has a cool option to make all subsequent connections tunnel through the first connection to that server. With this enabled in `~/.ssh/config`, only the first connection requires login/password:

```
ControlMaster auto
ControlPath ~/.ssh/control:%h:%p:%r
```
