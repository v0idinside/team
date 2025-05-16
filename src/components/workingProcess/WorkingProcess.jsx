import React from 'react';
import './WorkingProcess.css';

import contact from '../../assets/contact.png';
import cyberSecurity from '../../assets/cyberSecurity.png';
import handshake from '../../assets/handshake.png';
import UiUx from '../../assets/UiUx.png';
import { translations } from './translation';



const WorkingProcess = ({ language }) => {
  const t = translations[language]

  return (
    <div className='WorkingProcess-con' id='WorkingProcess-con'>
      <h1 className='WorkingProcess-title'>{t.title}</h1>

      <div className="WorkingProcess-block">
        <div className="WorkingProcess-Consultation"><span>{t.consultationSpan}</span>{t.consultation}</div>
        <img src={contact} alt="" />
      </div>

      <div className="WorkingProcess-block">
        <div className="WorkingProcess-Design"><span>{t.designSpan}</span>{t.design}</div>
        <img src={UiUx} alt="" />
      </div>

      <div className="WorkingProcess-block">
        <div className="WorkingProcess-Security"><span>{t.securitySpan}</span>{t.security}</div>
        <img src={cyberSecurity} alt="" />
      </div>

      <div className="WorkingProcess-block">
        <div className="WorkingProcess-LaunchSupport"><span>{t.launchSpan}</span>{t.launch}</div>
        <img src={handshake} alt="" />
      </div>
    </div>
  );
};

export default WorkingProcess;







