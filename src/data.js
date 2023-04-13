import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faN } from '@fortawesome/free-solid-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase} from '@fortawesome/free-solid-svg-icons';
import { faEarthAmericas} from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode} from '@fortawesome/free-solid-svg-icons';
import { faKeyboard} from '@fortawesome/free-solid-svg-icons';
import { faChalkboardUser} from '@fortawesome/free-solid-svg-icons';
import { faCodeCompare} from '@fortawesome/free-solid-svg-icons';
import imageEs from './assets/es.png';
import imageEn from './assets/en.png';
import imageDe from './assets/de.png';
import Card01 from "./assets/card01.jpg";
import Card02 from "./assets/utnba.png";
import Card03 from "./assets/oracle-logo1.png";
import Card04 from "./assets/coursera-logo.png";
import Card05 from "./assets/ils-logo.png";
import ReactImg from "./assets/react.png";
import AngularImg from "./assets/angular.png";
import Image1 from "./assets/image1.jpg";
import ImageHero from "./assets/hero01.png";

export const pageLinks = [
  { id: 0, href: "#home"},
  { id: 1, href: "#aboutme"},
  { id: 2, href: "#learning"},
  { id: 3, href: "#projects"},
  { id: 4, href: "#contact"},
];

export const heroSection = [
  {
    id: 1,
    image: ImageHero
  }
];
export const imgLanguage = [
  { id: 0, imageEn, imageEs, imageDe },
];
export const schoolLinks = [
  {
    id: 0,
    //href: "https://www.linkedin.com/in/limber-martinez-339866230/",
    iconClass: faLaptopCode,
    iconText: "ils",
    size: "2xl",
  },{
    id: 1,
    //href: "https://github.com/limbpuma",
    iconClass: faKeyboard,
    iconText: "utn ba",
    size: "2xl",
  },{
    id: 2,
    //href: "https://www.github.com",
    iconClass: faChalkboardUser,
    iconText: "coursera",
    size: "2xl",
  },
  {
    id: 3,
    //href: "https://www.linkedin.com/in/limber-martinez-339866230/",
    iconClass: faCodeCompare,
    iconText: "oracle",
    size: "2xl",
  },{
    id: 4,
    //href: "https://github.com/limbpuma",
    iconClass: faGithub,
    iconText: "Github",
    size: "2xl",
  },{
    id: 5,
    //href: "https://www.github.com",
    iconClass: faN,
    iconText: "Notion",
    size: "2xl",
  },
];

export const socialLinks = [
  /*Social Links */
  {
    id: 0,
    href: "https://www.linkedin.com/in/limber-martinez-339866230/",
    iconClass: faLinkedin,
    iconText: "Linkedin",
    size: "2xl",
  },{
    id: 1,
    href: "https://github.com/limbpuma",
    iconClass: faGithub,
    iconText: "Github",
    size: "2xl",
  },{
    id: 2,
    href: "https://www.github.com",
    iconClass: faN,
    iconText: "Notion",
    size: "2xl",
  },
  /*Social Links End*/
  /*About*/
  {
    id: 3,
    /*href: "/",*/
    iconClass: faHtml5,
    iconText: "Html",
    size: "2xl",
  },
  {
    id: 4,
    /*href: "/",*/
    iconClass: faCss3,
    iconText: "Css",
    size: "2xl",
  },
  {
    id: 5,
    /*href: "/",*/
    iconClass: faJs,
    iconText: "JS",
    size: "2xl",
  },
  {
    id: 6,
    /*href: "/",*/
    iconClass: faNodeJs,
    iconText: "Node",
    size: "2xl",
  },
  {
    id: 7,
    /*href: "/",*/
    iconClass: faDatabase,
    iconText: "Sql",
    size: "2xl",
  },
  /*About Card*/
  {
    id: 8,
    href: "https://www.github.com",
    iconClass: faNodeJs,
    iconText: "MySql",
    size: "2xl",
  },
  /*About End*/
  {
    id: 15,
    hrefs: [
      "https://www.github0.com",
      "https://www.github1.com",
      "https://www.github2.com"
    ],
    iconClass: faLinkedin,
    iconText: "web",
    size: "2xl",
    cardId: 1 // indicamos a qué card corresponde este link
  },
  {
    id: 16,
    hrefs: [
      "https://www.globo0.com",
      "https://www.globo1.com",
      "https://www.globo2.com"
    ],
    iconClass: faGithub,
    iconText: "web",
    size: "2xl",
    cardId: 2 // indicamos a qué card corresponde este link
  },
];

  export const projectLink = [
    {
      id: 0,
      href: "https://github.com/limbpuma/web",
      iconClass: faGithub,
      iconText: "Github",
      size: "2xl",
    },
    {
      id: 1,
      href: "https://www.google.com",
      iconClass: faEarthAmericas,
      iconText: "web",
      size: "2xl",
    },
    {
      id: 2,
      href: "https://github.com/limbpuma/UTN-React",
      iconClass: faGithub,
      iconText: "Github",
      size: "2xl",
    },
    {
      id: 3,
      href: "https://www.linkedin.com",
      iconClass: faEarthAmericas,
      iconText: "web",
      size: "2xl",
    },
    {
      id: 4,
      href: "https://github.com/limbpuma/AngularStore",
      iconClass: faGithub,
      iconText: "Github",
      size: "2xl",
    },
    {
      id: 5,
      href: "https://www.udemy.com",
      iconClass: faEarthAmericas,
      iconText: "web",
      size: "2xl",
    },
  ];
  
export const card = [
  {
    id: 0,
    image: Card01,
  },
  //Learning Card
  {
    id: 1,
    image: Card02,
    width: '45%',
    porcentNumber: "45%",
  },
  {
    id: 2,
    image: Card03,
    width: '25%',
    porcentNumber: "25%",
  },
  {
    id: 3,
    image: Card04,
    width: '25%',
    porcentNumber: "25%",
  },
  {
    id: 4,
    image: Card05,
    width: '100%',
    porcentNumber: "100%",
  },
  {
    id: 5,
    image: Image1,
    width: '65%',
    porcentNumber: "65%",
  },
  //Learning Card End
  {
    id: 6,
    image: ReactImg,
  },
  {
    id: 7,
    image: ReactImg,
  },
  {
    id: 8,
    image: AngularImg,
  },
  {
    id: 9,
    image: Image1,
  },
];

