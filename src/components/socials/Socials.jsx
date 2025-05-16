import React from 'react'
import telegram from '../../assets/telegramWhite.png';
import instagram from '../../assets/instagram.png';
import gmail from '../../assets/gmail.png';
import './Socials.css'
import  { translations } from './translations';

const Socials = ({ language }) => {

const t = translations[language];

return (
  <div className='Socials-block' id='Socials-block'>
    <h1 className='Socials-title'>{t.title}</h1>
    <div className="Socials-blockT">
      <a
        href="https://t.me/+tp7iU9dbUck1NzFi"
        target="_blank"
        rel="noopener noreferrer"
        className="Socials-link"
      >
        <img src={telegram} alt="Telegram" />
        <div className='Socials-name'>
          {t.telegramGroup} <span>{t.telegramSpan}</span>
        </div>
      </a>

      <a
        href="mailto:voidinsideteam@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="Socials-link"
      >
        <img src={gmail} alt="Gmail" />
        <div className='Socials-name'>{t.gmail} <span>voidinsideteam@gmail.com</span></div>
      </a>

      <a
          href="https://www.instagram.com/voidinsideteam/"
        target="_blank"
        rel="noopener noreferrer"
        className="Socials-link"
      >
        <img src={instagram} alt="Instagram" />
        <div className='Socials-name'>{t.instagram} <span>voidinsideteam</span></div>
      </a>


    </div>
  </div>
);
};

export default Socials;
