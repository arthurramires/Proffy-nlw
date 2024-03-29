import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import logoIMG from '../../assets/images/logo.svg'
import landingIMG from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import logoutIcon from '../../assets/images/icons/Sair.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import api from '../../services/api';


import './styles.css'

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;

      setTotalConnections(total);
    })
  }, [totalConnections]);





  return (
    <div id="page-landing">
      <div className="header">
          <div className="profile">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZtlNENqSFcXypKiUhTqKh6-oPB2q645V9UA&usqp=CAU" alt="Imagem de Perfil"/>
            <span>Arthur Ramires</span>
          </div>

          <button type="button">
            <img src={logoutIcon} alt="Botão de sair"/>
          </button>
         
      </div>
      <div id="page-landing-content" className="container">
        
        <div className="logo-container">
          <img src={logoIMG} alt="Proffy"/>
          <h2>Sua plataformas de estudos online.</h2>
        </div>

        <img src={landingIMG} alt="Plataforma de estudos" className="hero-image"/>

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar Aulas"/>
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt=""/>
        </span>

      </div>
    </div>
  );
}

export default Landing;