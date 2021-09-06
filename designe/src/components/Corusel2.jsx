import React from "react";
import Carousel from "react-elastic-carousel";
import "./corusel.css";
import styled from 'styled-components'
import imgMonitor from '../img/SPRDdigital_DellaSpina_kako-deluje_monitor_listing.png'
import imgTablet from '../img/SPRDdigital_DellaSpina_izbira-ocal_tablica_listing.png'
import IzbiraOčalMonitor from '../img/SPRDdigital_DellaSpina_izbira-ocal_monitor_listing.png'
import KakodelujeTablet from '../img/SPRDdigital_DellaSpina_kako-deluje_tablica.png'
import KošaricaMonitor from '../img/SPRDdigital_DellaSpina_kosarica_monitor_listing.png'
import TelefonImg from '../img/SPRDdigital_DellaSpina_kako-deluje_telefon_listing.png'
import IzbiraOčalPhone from '../img/SPRDdigital_DellaSpina_izbira-ocal_telefon.png'
import KošaricaTelefon from '../img/SPRDdigital_DellaSpina_kosarica_telefon_listing.png'

export default function Corusel2() {
  return (
    <div>
      <Carousel>
        <div className="card">
         
          <img className="imgMonitor" src={imgMonitor}/>
          <img className='imgTablet' src={KakodelujeTablet}/>
          <img className='imgPhone' src={TelefonImg}/>


        </div>
        <div className="card">
        <img className="imgMonitor" src={IzbiraOčalMonitor}/>
        <img className='imgTablet' src={imgTablet}/>
        <img className='imgPhone' src={IzbiraOčalPhone}/>
        </div>
        <div className="card">
        <img className="imgMonitor" src={KošaricaMonitor}/>
          <img className='imgTablet' src={imgTablet}/>
          <img className='imgPhone' src={KošaricaTelefon}/>

        </div>
        
      
      </Carousel>
    </div>
  );
}
