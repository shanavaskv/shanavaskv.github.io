// Everything about you that appears on the home page lives here.
// Edit this file to update your bio, roles, education and links.

export const profile = {
  name: 'Shanavas K. Veedu',
  shortName: 'Shanavas',
  title: 'Physicist & data scientist',
  // TODO: update with current role and location.
  location: 'New York, NY',
  email: 'me@shanavasv.com',
  intro:
    'I use computation, statistics and machine learning to make sense of complex systems, from the electronic structure of quantum materials to the topics hidden in thousands of lecture transcripts.',
  bio: [
    'I trained as a theoretical condensed matter physicist, building first-principles, molecular dynamics and Monte Carlo models of functional materials at BARC, the University of Missouri and Oak Ridge National Laboratory. Along the way I published 29 papers in journals such as Physical Review Letters, Physical Review B and Scientific Reports, and filed two invention disclosures for US patents.',
    'Today I apply the same quantitative toolkit to data: predictive modelling, NLP and topic modelling, and visualization, mostly in Python.',
  ],
  links: [
    { label: 'GitHub', href: 'https://github.com/shanavaskv' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shanavaskv' },
  ],
  focus: [
    'Machine learning: classification, regression, clustering, anomaly detection',
    'Natural language processing and topic modelling',
    'First-principles electronic structure, molecular dynamics, Monte Carlo',
    'Python, C++, scientific computing',
  ],
};

export const experience = [
  {
    role: 'Postdoctoral Fellow',
    org: 'Oak Ridge National Laboratory',
    period: '2014 – 2016',
    note: 'Developed materials for clean energy technologies.',
  },
  {
    role: 'Postdoctoral Fellow',
    org: 'University of Missouri',
    period: '2011 – 2014',
    note: 'Developed analytical models of microscopic interactions.',
  },
  {
    role: 'Staff Scientist',
    org: 'Bhabha Atomic Research Centre, Mumbai',
    period: '2002 – 2011',
    note: 'Studied phase transition processes using statistical models.',
  },
];

export const education = [
  { degree: 'Data Science & Machine Learning', org: 'Bitbootcamp, New York', year: '2016' },
  { degree: 'PhD in Physics', org: 'Homi Bhabha National Institute', year: '2011', note: 'Classical and quantum simulations of novel functional materials' },
  { degree: 'M.Sc. in Physics', org: 'Indian Institute of Technology', year: '2002', note: 'Artificial neural networks' },
];
