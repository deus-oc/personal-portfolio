import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Anish Agrawal | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Anish Agrawal',
  subtitle: 'Software Engineer UnderGraduate Problem Solver and Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Energetic and Passionate Final year student pursuing B.Tech in Computer Science at IIIT Kalyani. I have the ability to quickly grasp business problems and work on viable technical solutions.',
  paragraphTwo:
    'My firm grip on data structure and algorithms leverage me to solve complex problems. I too love learning new technologies.',
  paragraphThree: 'Hobbies: Play Football, Strum Ukelele and Travel new places.',
  resume: 'https://drive.google.com/file/d/1CNeRnukwd5m5MNBsxmefwlkp4iWEL-xq/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Detecting Visually Observable Disease Symptoms from Faces',
    info: 'Implementation of a paper by Kuan Wang and Jiebo Luo to detect whether the person is affected by disease based on the symptoms by analyzing the frontal facial image',
    info2:
      'Used a Semi-supervised Approach and facial data extracted were facial symmetry ratio, CIELAB color channels, calculation of circles on skin area and used Normal Distribution to classify if result is an anomaly',
    url: '',
    repo: 'https://github.com/deus-oc/detect_facial_disease', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'IIIT Kalyani Report Card GUI Application',
    info: 'Desktop Application for administration which reads student-wise grades from Data-Sheet and makes report Card having GPA and SGPA along with Grade Point of each Subject',
    info2:
      'It also has features to process group of student results such as sorting, calculating central values, comparing two student report side-to-side',
    url: '',
    repo: 'https://github.com/deus-oc/project-eclipse', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'DuoAuth (Double Authentication System)',
    info: 'The idea is to explore a second leg of Authorization by creating a portal which acts as a middleware based on approvals with two layered consent.',
    info2:
      'The portal features Login System and allows to attach relevant documents and data to the form to be reviewed and an email goes to reviewer to complete the approval.',
    url: '',
    repo: 'https://github.com/deus-oc/double_authentication_nodejs', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'anishagrawal.2612@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/anish-2612/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/deus-oc/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
