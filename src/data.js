import Image1 from './assets/image1.jpg';
/*
import tour1 from './images/tour-1.jpeg';
import tour2 from './images/tour-2.jpeg';
import tour3 from './images/tour-3.jpeg';
import tour4 from './images/tour-4.jpeg';
*/
export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#projects', text: 'projects' },
  { id: 4, href: '#contact', text: 'contact' },
];
export const titleSection = [
  { id: 1, title:'titulo', subTitle:'subtitulo'},
  { id: 2, title:'titulo', subTitle:'subtitulo'},
  { id: 3, title:'titulo', subTitle:'subtitulo'},
  { id: 4, title:'titulo', subTitle:'subtitulo'},
];
export const socialLinks = [
  { id: 1, 
  href: 'https://www.facebook.es', 
  iconClass: 'bi bi-github', 
  iconText: 'github', 
  iconColor: 'white', 
  path: 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z'},
  { id: 2, 
    href: 'https://www.facebook.es', 
    iconClass: 'bi bi-linkedin', 
    iconText: 'linkedin', 
    iconColor: 'white', 
    path: 'M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z'},
  { id: 3, 
    href: 'https://www.facebook.es', 
    iconClass: 'bi bi-whatsapp', 
    iconText: 'whatsapp', 
    iconColor: 'white', 
    path: 'M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z'},
  { id: 4, href: 'https://www.facebook.es', iconClass: 'bi bi-browser-chrome', iconText: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.', iconColor: 'white', path: 'M16 8a8.001 8.001 0 0 1-7.022 7.94l1.902-7.098a2.995 2.995 0 0 0 .05-1.492A2.977 2.977 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8ZM0 8a8 8 0 0 0 7.927 8l1.426-5.321a2.978 2.978 0 0 1-.723.255 2.979 2.979 0 0 1-1.743-.147 2.986 2.986 0 0 1-1.043-.7L.633 4.876A7.975 7.975 0 0 0 0 8Zm5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a2.979 2.979 0 0 0-1.252.243 2.987 2.987 0 0 0-1.81 2.59ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'},
];
export const card = [
  { id: 1, 
    title: 'Titulo', 
    image: Image1,
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.' },
  { id: 2, 
    title: 'Titulo', 
    image: Image1,
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua' },
  { id: 3, 
    title: 'Titulo',
    image: Image1, 
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.' },
  { id: 4, 
    title: 'Titulo',
    image: Image1, 
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.' },
];
export const projectLinks1 = [
    { id: 1, href: 'https://www.twitter.com/user1', icon: 'fab fa-twitter', btnClass: 'btn btn-primary'},
    { id: 2, href: 'https://www.facebook.com/user1', icon: 'fab fa-facebook', btnClass: 'btn btn-secondary'},
  ];
  
  export const projectLinks2 = [
    { id: 1, href: 'https://www.twitter.com/user2', icon: 'fab fa-twitter', btnClass: 'btn btn-primary'},
    { id: 2, href: 'https://www.facebook.com/user2', icon: 'fab fa-fa-facebook', btnClass: 'btn btn-secondary'},
  ];
  
  export const projectLinks3 = [
    { id: 1, href: 'https://www.twitter.com/user3', icon: 'fab fa-twitter', btnClass: 'btn btn-primary'},
    { id: 2, href: 'https://www.facebook.com/user3', icon: 'fab fa-fa-facebook', btnClass: 'btn btn-secondary'},
  ];
export const AboutMe = [
    {
      id: 1,
      icon: 'fas fa-wallet fa-fw',
      title: 'saving money',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
    },
    {
      id: 2,
      icon: 'fas fa-tree fa-fw',
      title: 'endless hiking',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
    },
    {
      id: 3,
      icon: 'fas fa-socks fa-fw',
      title: 'amazing comfort',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
    },
  ];
export const Projects = [
    {
      id: 1,
      icon: 'fas fa-wallet fa-fw',
      title: 'saving money',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
    },
    {
      id: 2,
      icon: 'fas fa-tree fa-fw',
      title: 'endless hiking',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
    },
    {
      id: 3,
      icon: 'fas fa-socks fa-fw',
      title: 'amazing comfort',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
    },
  ];