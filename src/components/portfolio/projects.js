import coffeBee from '../../assets/projects/coffeBee.png';

import myApp from '../../assets/projects/myApp.png';



export const projects = [
  {
    id: 1,
    image: myApp,
    url: 'https://voidinsideteam.com',
    title: {
      en: 'Void Inside Team',
      ua: 'Void Inside Team',
      ru: 'Void Inside Team',
    },
    description: {
      en: 'Our portfolio website where we present web development services, selected works, and team vision.',
      ua: 'Наш сайт-портфоліо, де ми презентуємо послуги з розробки сайтів, обрані проєкти та бачення команди.',
      ru: 'Наш сайт-портфолио, где мы представляем услуги по разработке сайтов, избранные проекты и видение команды.',
    },
  },
    {
      id: 2,
      image: coffeBee,
      url: 'https://coffee-bee.web.app/',
      title: {
        en: 'Coffee Roastery Website',
        ua: 'Сайт для обсмажувальника кави',
        ru: 'Сайт для обжарщика кофе',
      },
      description: {
        en: 'Admin panel for a network of coffee shops',
        ua: 'Адмін-панель для мережі кавʼярень',
        ru: 'Админ-панель для сети кофеен',
      },
    }
    
  ];
  