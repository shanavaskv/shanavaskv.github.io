---
title: "BibTeX from DOI"
description: "Fetch a BibTeX entry for any paper straight from its DOI with a one-line shell function."
date: 2014-03-20
tags: ["bibtex", "doi"]
---

I have been using [Mendeley](http://www.mendeley.com/) for reference management since it’s inception. It organizes the articles well, keeps the library synced with the cloud and most importantly allows exporting the references as bib files automatically for use in LaTex writing. But I always found the interface rather dull. The more recent [ReadCube](http://www.readcube.com/) is fashionable and has some sleek document enhancing abilities. It can download the documents from the internet, fetch references and shows related materials from Google Scholar and PubMed. Unfortunately, the at this time it has poor citation abilities, although the developers promise it’s coming in early 2014.

Most publishers have a “download citation” button on the article pages, but not all of them export in bib format. Looking for an alternative, I learned that [Crossref](http://www.crossref.org/) now has a nice feature with which one can get the bibliography entry from the [DOI](http://dx.doi.org/). More info [here](http://www.crossref.org/CrossTech/2011/11/turning_dois_into_formatted_ci.html). Use the following code at the commandline (needs [curl](http://curl.haxx.se/) installed)

```
curl -LH "Accept: text/bibliography; style=bibtex" http://dx.doi.org/10.1103/PhysRevLett.112.086802
```

which returns:

```
@article{Shanavas_Satpathy_2014, 
title={Electric Field Tuning of the Rashba Effect in the Polar Perovskite Structures},
volume={112}, ISSN={1079-7114}, 
url={http://dx.doi.org/10.1103/PhysRevLett.112.086802}, DOI={10.1103/physrevlett.112.086802}, 
number={8}, 
journal={Physical Review Letters}, 
publisher={American Physical Society (APS)}, author={Shanavas, K. V. and Satpathy, S.}, 
year={2014}, 
month={Feb}}
```

I wrote a function which can be put in the `.bashrc` file. It will seperate the entry into multiple lines for readability

```
doi2bib() { curl -LH "Accept: text/bibliography; style=bibtex" http://dx.doi.org/"$@" | awk '{sub(",",",\n"); gsub("},","},\n"); print $0}'; }
```

To use it, simply run `doi2bib 10.1103/PhysRevLett.112.086802` from the command line.

At this stage there are three problems with this method:

1. The journal abbreviations are not always used
2. The author list is truncated if it is too long
3. For many APS articles page numbers are not returned
