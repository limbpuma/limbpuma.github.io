import Image1 from './assets/image1.jpg';
import languages from '../languages.json';
import heroBackground from '../assets/hero-background.jpg';

const activeLanguage = 'en'; // o 'es', dependiendo del idioma seleccionado por el usuario

export const heroSection = [
  { id: 1, title: languages[activeLanguage].title, subTitle: languages[activeLanguage].subtitle, smallText: languages[activeLanguage].smallText,imageHero: heroBackground },
];
export const pageLinks = [
  { id: 1, href: '#home', text: languages[activeLanguage].home},
  { id: 2, href: '#about', text: languages[activeLanguage].about },
  { id: 3, href: '#projects', text: languages[activeLanguage].projects },
  { id: 4, href: '#contact', text: languages[activeLanguage].contact },
];
export const titleSection = [
  { id: 1, title:languages[activeLanguage].titleSection['1'].title, subTitle:languages[activeLanguage].titleSection['1'].subtitle},
  { id: 2, title:languages[activeLanguage].titleSection['2'].title, subTitle:languages[activeLanguage].titleSection['2'].subtitle},
  { id: 3, title:languages[activeLanguage].titleSection['3'].title, subTitle:languages[activeLanguage].titleSection['3'].subtitle},
  { id: 4, title:languages[activeLanguage].titleSection['4'].title, subTitle:languages[activeLanguage].titleSection['4'].subtitle},
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
  { id: 4, 
      href: 'https://www.facebook.es', 
      iconClass: 'bi bi-whatsapp', 
      iconText: 'whatsapp', 
      iconColor: 'white', 
      path: 'M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z'},
      { id: 5, 
        href: 'https://www.facebook.es', 
        iconClass: 'bi bi-whatsapp', 
        iconText: 'whatsapp', 
        iconColor: 'white', 
        path: 'M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z'},
    ];
export const card = [
  /* aboutMe Left*/
  { id: 1, 
    title: languages[activeLanguage].card['1'].title, 
    image: Image1,
    text: languages[activeLanguage].card['1'].text},
  { id: 2, 
    title: languages[activeLanguage].card['2'].title, 
    image: Image1,
    text: languages[activeLanguage].card['2'].text},
  { id: 3, 
    title: languages[activeLanguage].card['3'].title,
    image: Image1, 
    text: languages[activeLanguage].card['3'].text},
  { id: 4, 
    title: languages[activeLanguage].card['4'].title,
    image: Image1, 
    text: languages[activeLanguage].card['4'].text},
    /* aboutMe Right*/
  { id: 5,
    title: languages[activeLanguage].card['5'].title,
    image: Image1,
    text: languages[activeLanguage].card['5'].text},
    /* Projects*/
  { id: 6,
    title: languages[activeLanguage].card['6'].title,
    image: Image1,
    text: languages[activeLanguage].card['6'].text},
  { id: 7,
    title: languages[activeLanguage].card['7'].title,
    image: Image1,
    text: languages[activeLanguage].card['7'].text},
  { id: 8,
    title: languages[activeLanguage].card['8'].title,
    image: Image1,
    text: languages[activeLanguage].card['8'].text},
    /* No assigned*/
  { id: 9,
    title: languages[activeLanguage].card['9'].title,
    image: Image1,
    text: languages[activeLanguage].card['9'].text},
  { id: 10,
    title: languages[activeLanguage].card['10'].title,
    image: Image1,
    text: languages[activeLanguage].card['10'].text},

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
  export const contactMe = [
    { 
      id: 1,
      formLabelText: 'Email address',
      formExampleText: 'Example textarea',
      formButton: 'Submit',
    },
  ];
  export const footer = [
    { id:1,
      footerTitle: 'Thank You for your visit',
      footerText: 'Passionate about technology. Committed to your success.',
      footerText2: '© 2021 - All Rights Reserved',
      footerFollow: 'Follow Me'},
  ];
