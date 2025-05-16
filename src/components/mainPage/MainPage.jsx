import React, { useEffect, useState } from 'react'
import './MainPage.css'
import Header from '../header/Header'
import WebDev from '../webDev/WebDev'
import WorkingProcess from '../workingProcess/WorkingProcess'
import Socials from '../socials/Socials'
import Portfolio from '../portfolio/Portfolio'
import Foter from '../foter/Foter'


const MainPage = () => {

  const [modal, setModal] = useState(false); 
  const [language, setLanguage] = useState('en'); 
 const [showLang, setShowLang] = useState(false);




  const handleLangSelect = (lang) => {
    setLanguage(lang);
    setShowLang(false);
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    const saveLang = localStorage.getItem('language');
    if(saveLang) {
      setLanguage(saveLang)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1100) {
        setModal(false);
      }
    };
  
    window.addEventListener('resize', handleResize);
    handleResize(); 
  
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  

  return (
    <div className='mainpage-container'
    onClick={() => modal && setModal(false)}
    >
       <Header modal={modal} handleLangSelect={handleLangSelect} setShowLang={setShowLang} showLang={showLang} setModal={setModal} language={language} />
       <WebDev language={language}/>
       <WorkingProcess language={language}/>
       <Socials language={language}/>
       <Portfolio language={language}/>
       <Foter language={language}/>
      </div>
  )
}

export default MainPage