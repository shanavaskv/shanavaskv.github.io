---
title: "Compile VASP on OSX"
description: "Notes on building VASP 5.3.5 with gfortran on macOS, including the case-insensitive filesystem gotcha."
date: 2014-04-24
tags: []
---

[VASP](https://www.vasp.at/) is a pseudopotential based ab-initio code useful to study electronic structure of materials. Although most calculations are done with the help of parallel computing clusters, it is good to have it on the laptop for some quick testing. However, when I switched to Macbook from a HP Envy laptop running [Ubuntu](http://ubuntu.com/), I realised it is not easy to get it running in OS X. I finally got it to work, with some help from this [link](http://www.nsc.liu.se/~pla/blog/2011/06/28/vaspcompile/).

Below are the instruction to compile VASP version 5.3.5 with gfortran. First step is to build the vasp.5.lib. Copy the linux\_gfortran makefile:

```
cp makefile.linux_gfortran makefile
```

We are going to use gfortran, so make sure it is installed. There are several package management systems for OS X; I personally like [Homebrew](http://brew.sh/). One point that took me a while to realize was that OS X by default has a case insensitive file system, so preclib.F and preclib.f are the same file. VASP preprocesses the .F files and creates .f files, basically overwriting the original ones. We will need to fix that. Make the following changes to the `makefile`:

```
CPP = gcc -E -P -x c $*.F >$*.f90
FFLAGS = -O1 -cpp
```

and compile by typing: `make` and ignore any warnings. It should build the library `libdmy.a`. Now change over to the main folder `vasp.5.3` and copy over `makefile.linux_gfortran` and make the following changes to the file.

```
FC=gfortran
CPP_ = ./preprocess <$*.F | /usr/bin/cpp -P -C -traditional -w >$*$(SUFFIX)
FFLAGS = -ffree-form -ffree-line-length-0
BLAS= -framework vecLib
```

Save the file and type `make`. Unfortunately, the code is not fully compatible with gfortran, so we will need to make several fixes. One of them is a space between a function call and (. Run the following command to fix files with errors.

```
for file in dfast.F choleski2.F dos.F broyden.F fock.F force.F rot.F main.F; do
  sed -i.bak s/CALLMPI\ \(/CALLMPI\(/g $file; rm $file.bak 
done
sed -i.bak s/CALLMPI_C\ \(/CALLMPI_C\(/g main.F; rm main.F.bak
```

Replace the `USE us` lines in `us.F` so that it looks like

```
1462 USE constant
1463 USE us, only : setdij_
1464 IMPLICIT NONE
2695 USE wave
2696 USE us, only : augmentation_charge
2697
2698 IMPLICIT NONE
```

Now, running `make` should hopefully compile it.
