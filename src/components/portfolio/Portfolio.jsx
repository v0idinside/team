import React, { useRef, useState, useEffect } from 'react';
import './Portfolio.css';
import { projects } from './projects';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const Portfolio = ({ language }) => {


  const [curentWork, setCurrentWork] = useState(0);
  const project = projects[curentWork];

 

  return (
    <div className="Portfolio-container" id='Portfolio-container'>
      <div className="Portfolio-title">
        {language === 'ua'
          ? 'Наші роботи'
          : language === 'ru'
          ? 'Наши работы'
          : 'Our Works'}
      </div>

      <div
        className="Portfolio-left-btn"
        onClick={() =>
          setCurrentWork(curentWork === 0 ? projects.length - 1 : curentWork - 1)
        }
        aria-label="Previous"
      >
        <FaChevronLeft />
      </div>

      <div
        className="Portfolio-right-btn"
        onClick={() =>
          setCurrentWork(curentWork === projects.length - 1 ? 0 : curentWork + 1)
        }
        aria-label="Next"
      >
        <FaChevronRight />
      </div>

      <div className="Portfolio-slider">
  <div key={project.id} className="Portfolio-card">
    <img
      src={project.image}
      alt={project.title[language]}
      className="Portfolio-image"
    />
    <h3>{project.title[language]}</h3>
    <p>{project.description[language]}</p>
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="Portfolio-link"
    >
      {language === 'ua'
        ? 'Перейти на сайт'
        : language === 'ru'
        ? 'Перейти на сайт'
        : 'Visit Site'}
    </a>
  </div>
</div>

    </div>
  );
};

export default Portfolio;
