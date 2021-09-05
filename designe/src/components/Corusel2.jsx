import React from "react";
import Carousel from "react-elastic-carousel";
import "./corusel.css";
import styled from 'styled-components'
import imgMonitor from '../img/SPRDdigital_DellaSpina_kako-deluje_monitor_listing.png'
import imgTablet from '../img/SPRDdigital_DellaSpina_izbira-ocal_tablica_listing.png'



const Button = styled.button`
    
   
`

export default function Corusel2() {
  return (
    <div>
      <Carousel>
        <div className="card">
         
          <img className="imgMonitor" src={imgMonitor}/>
          <img className='imgTablet' src={imgTablet}/>

        </div>
        <div className="card">
        <img className="imgMonitor" src={imgMonitor}/>
          <img className='imgTablet' src={imgTablet}/>

        </div>
        <div className="card">
        <img className="imgMonitor" src={imgMonitor}/>
          <img className='imgTablet' src={imgTablet}/>

        </div>
        <div className="card">
        <img className="imgMonitor" src={imgMonitor}/>
          <img className='imgTablet' src={imgTablet}/>

        </div>
        <div className="card">
        <img className="imgMonitor" src={imgMonitor}/>
          <img className='imgTablet' src={imgTablet}/>

        </div>
      </Carousel>
    </div>
  );
}
