import React from 'react';
import './Foter.css';
import ebalo from '../../assets/myFace.jpg';
import { translations } from './translation';  

const Foter = ({ language }) => {
  const t = translations[language]; 

  return (
    <div className='Foter'>
        <div className="Foter-rights">{t.rights}</div>
        <div className="Foter-Block">
          <p className="Foter-creator">{t.createdBy}</p>
          <img src={ebalo} alt="ebalo" />
        </div>
    </div>
  );
}

export default Foter;
