import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faN } from '@fortawesome/free-solid-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCss3 } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase} from '@fortawesome/free-solid-svg-icons';
import { faEarthAmericas} from '@fortawesome/free-solid-svg-icons';


import Image1 from "./assets/image1.jpg";
import ImageHero from "./assets/hero01.png";

export const pageLinks = [
  { id: 0, href: "#home"},
  { id: 1, href: "#about"},
  { id: 2, href: "#projects"},
  { id: 3, href: "#contact"},
];

export const heroSection = [
  {
    id: 1,
    image: ImageHero
  }
];
export const socialLinks = [
  /*Social Links */
  {
    id: 0,
    href: "https://www.github.com",
    iconClass: faLinkedin,
    iconText: "Linkedin",
    size: "2xl",
  },{
    id: 1,
    href: "https://www.github.com",
    iconClass: faGithub,
    iconText: "Html",
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
    href: "https://www.github.com",
    iconClass: faHtml5,
    iconText: "Html",
    size: "2xl",
  },
  {
    id: 4,
    href: "https://www.github.com",
    iconClass: faCss3,
    iconText: "Css",
    size: "2xl",
  },
  {
    id: 5,
    href: "https://www.github.com",
    iconClass: faJs,
    iconText: "JS",
    size: "2xl",
  },
  {
    id: 6,
    href: "https://www.github.com",
    iconClass: faNodeJs,
    iconText: "Node",
    size: "2xl",
  },
  {
    id: 7,
    href: "https://www.github.com",
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
    iconClass: faGithub,
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
    href: "https://www.github.com",
    iconClass: faGithub,
    iconText: "Github",
    size: "2xl",
  },
  {
    id: 1,
    href: "https://www.github.com",
    iconClass: faEarthAmericas,
    iconText: "web",
    size: "2xl",
  },
  {
    id: 2,
    href: "https://www.github.com",
    iconClass: faGithub,
    iconText: "github",
    size: "2xl",
  },
  {
    id: 3,
    href: "https://www.github.com",
    iconClass: faGithub,
    iconText: "Linkedin",
    size: "2xl",
  },
  {
    id: 4,
    href: "https://www.github.com",
    iconClass: faGithub,
    iconText: "Notion",
    size: "2xl",
  },
  {
    id: 5,
    href: "https://www.github.com",
    iconClass: faGithub,
    iconText: "github",
    size: "2xl",
  },
];
export const card = [
  {
    id: 0,
    image: Image1,
  },
  {
    id: 1,
    image: Image1,
  },
  {
    id: 2,
    image: Image1,
  },
  {
    id: 3,
    image: Image1,
  },
  {
    id: 4,
    image: Image1,
  },
  {
    id: 5,
    image: Image1,
  },
];

