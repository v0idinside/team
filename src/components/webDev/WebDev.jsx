import React from 'react';
import './WebDev.css';
import telegramImg from '../../assets/telegram.png';
import { webDevTranslations } from './translation';

const WebDev = ({ language }) => {
  const t = webDevTranslations[language];

  return (
    <div className='WebDev-con' id='WebDev-con'>
      <h1 className='WebDev-title'>{t.title}</h1>
      <p className='WebDev-toOrder'>{t.description}</p>
      
      <div className="WebDev-contact">
        <a className='WebDev-linkTg' href="https://t.me/Emebjxjsb" target="_blank" rel="noopener noreferrer">
          <div className="WebDev-telegram">
            <div className="WebDev-telegramText">{t.contactManager}</div>
            <img className='WebDev-telegramImg' src={telegramImg} alt="Telegram Icon" />
          </div>
        </a>

        <form className='WevDev-form'>
          <div className="WevDev-form-input">
            <p>{t.nameLabel}</p>
            <input 
              type="text" 
              placeholder={t.namePlaceholder} 
              required 
            />
          </div>

          <div className="WevDev-form-input">
            <p>{t.phoneLabel}</p>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder={t.phonePlaceholder}
              pattern="^\+?[0-9]{1,4}[-\s]?[0-9]{3}[-\s]?[0-9]{3}[-\s]?[0-9]{3}$"
              required
            />
          </div>

          <div className="WevDev-form-input">
            <p>{t.emailLabel}</p>
            <input 
              type="email" 
              placeholder={t.emailPlaceholder} 
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              required 
            />
          </div>

          <button className='WevDev-btn' type="submit">{t.submit}</button>
        </form>
      </div>
    </div>
  );
};

export default WebDev;
