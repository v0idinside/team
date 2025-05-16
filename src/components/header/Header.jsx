import React, { useEffect, useState } from 'react';
import './Header.css';
import darkAnonymous from '../../assets/darkAnonymous.png';
import { translations } from './translation';

const Header = ({ modal, setModal, language, handleLangSelect, showLang, setShowLang }) => {
  const LANGUAGES = {
    en: { label: 'EN', flag: '🇬🇧' },
    ru: { label: 'RU', flag: '🇷🇺' },
    ua: { label: 'UA', flag: '🇺🇦' },
  };

  const t = translations[language];


  const scrollToBlock = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setModal(false); 
  };

  return (
    <div className="header">
      <div className='header-container'>
        <div className='header-companyName'>
          <div className="header-companyName-con">
            <div className="header-voidInsid">void inside</div>
            <img src={darkAnonymous} alt="" />
          </div>
          <div className="header-team">team</div>
        </div>

        <div className="header-navbar">
        <div className="navbar-item" onClick={() => scrollToBlock('WebDev-con')}>{t.webDev}</div>
          <div className="navbar-item" onClick={() => scrollToBlock('WorkingProcess-con')}>{t.aboutUs}</div>
          <div className="navbar-item" onClick={() => scrollToBlock('Socials-block')}>{t.contactUs}</div>
          <div className="navbar-item" onClick={() => scrollToBlock('Portfolio-container')}>{t.whyChooseUs}</div>


          <input
            id="menu__toggle"
            type="checkbox"
            checked={modal}
            onChange={() => setModal(prev => !prev)}
          />
          <label className={`menu__btn ${modal ? 'menu-btn-opacinity' : 'menu-btn-nohiden'}`} htmlFor="menu__toggle">
            <span></span>
          </label>

          <div className="language-dropdown">
            <div className="language-selected" onClick={() => setShowLang(!showLang)}>
              {t.language} {LANGUAGES[language].flag} {LANGUAGES[language].label}
            </div>

            {showLang && (
              <div className="language-options">
                <div onClick={() => handleLangSelect('en')}>🇬🇧 EN</div>
                <div onClick={() => handleLangSelect('ru')}>🇷🇺 RU</div>
                <div onClick={() => handleLangSelect('ua')}>🇺🇦 UA</div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={`burger-menu-block ${modal ? 'burger-menu-active' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="burger-menu">
       
        <div className="burger-item" onClick={() => scrollToBlock('WebDev-con')}>{t.webDev}</div>
          <div className="burger-item" onClick={() => scrollToBlock('WorkingProcess-con')}>{t.aboutUs}</div>
          <div className="burger-item" onClick={() => scrollToBlock('Socials-block')}>{t.contactUs}</div>
          <div className="burger-item" onClick={() => scrollToBlock('Portfolio-container')}>{t.whyChooseUs}</div>

          <div className="burger-language-dropdown">
            <div className="burger-language-selected" onClick={() => setShowLang(!showLang)}>
              {t.language} {LANGUAGES[language].flag} {LANGUAGES[language].label}
            </div>

            {showLang && (
              <div className="burger-language-options">
                <div onClick={() => handleLangSelect('en')}>🇬🇧 EN</div>
                <div onClick={() => handleLangSelect('ru')}>🇷🇺 RU</div>
                <div onClick={() => handleLangSelect('ua')}>🇺🇦 UA</div>
              </div>
            )}
          </div>

          <div
            className="burger-item close-modal-btn"
            onClick={() => setModal(!modal)}
          >
            CLOSE MODAL
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
