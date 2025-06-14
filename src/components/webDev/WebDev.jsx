import React, { useState } from 'react';
import './WebDev.css';
import telegramImg from '../../assets/telegram.png';
import { webDevTranslations } from './translation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const WebDev = ({ language }) => {
  const t = webDevTranslations[language];


  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);


  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });


  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/xeokkqwq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      setFormData({ name: '', phone: '', email: '' });
      notifySuccess(t.successMessage)
    } else {
      notifyError(t.errorMessage)
    }
  };

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

        <form className='WevDev-form' onSubmit={handleSubmit}>
          <div className="WevDev-form-input">
            <p>{t.nameLabel}</p>
            <input 
              type="text"
              name="name"
              placeholder={t.namePlaceholder}
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="WevDev-form-input">
            <p>{t.phoneLabel}</p>
            <input
              type="tel"
              name="phone"
              placeholder={t.phonePlaceholder}
              pattern="^\+?[0-9]{1,4}[-\s]?[0-9]{3}[-\s]?[0-9]{3}[-\s]?[0-9]{3}$"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="WevDev-form-input">
            <p>{t.emailLabel}</p>
            <input 
              type="email"
              name="email"
              placeholder={t.emailPlaceholder}
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <button className='WevDev-btn' type="submit">
            {t.submit}
          </button>

        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default WebDev;
