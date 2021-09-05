import React,{useState} from 'react'
import styled from 'styled-components'
import './Slider.css'
// images
import Vector from '../img/Vector.svg'
import SpdrMonitor from '../img/SPRDdigital_DellaSpina_naslovna_monitor.png'
import TableMonitor from '../img/SPRDdigital_DellaSpina_naslovna_tablica.png'

//icons
import {BiMenuAltLeft} from 'react-icons/bi'



const Nav = () => {

       return (
        <div>
         
           

         
            <Navbar>
                <UpperNav>
                <div className="arrow">
              
                <img src={Vector} className="logo" alt="" />
                <TextTitle >
                
                    <div className='dots'> </div>
                    <div>
                        <Span>Študija Primera</Span>
                        <Title>Spletna Optika Della <br /> Spina</Title>
                    </div>

                </TextTitle>
                </div>
                <div className="burger">
                    <div className="burger-box">

                     <BiMenuAltLeft size={80}/>

                       </div> 
                </div>
                <TitleBar>

                <TitleBarUp className="up">Inovativno do</TitleBarUp>
                <TitleBarDown className="down">spletne prodaje očal</TitleBarDown>
                </TitleBar>

            </UpperNav>
            <Images>
                <MonitorTitle src={SpdrMonitor} className="monitor-title-desk" alt="" />
                <MonitorTitle src={TableMonitor} className="monitor-title-tablet" alt="" />
                <Button>Več Informacij</Button>

            </Images>
        
            </Navbar>
           
        
        </div>
    )
}
const Images = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10%;
    margin-left:10%;
    position: absolute;
   
`

const Button = styled.button`
    z-index: 1;
    position: absolute;
    left: 19%;
    top: 55%;
    padding: 1.5% 9%;
    background: #86B998;
    border:none;
    color: #FFFF;
    cursor: pointer;
    font-size: 20px;
    font-family: "Gotham-Book";

    @media only screen 
    and (min-device-width: 1055px) 
    and (max-device-width: 1024px) 
    and (-webkit-min-device-pixel-ratio: 1) {
        left: 19%;
        top: 55%;
        padding: 1.5% 3%;
    }
    //tablet // IPAD

    @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (-webkit-min-device-pixel-ratio: 1) {
        top: 44%;
        left: 13%;
        padding: 1rem 3rem ;
    }
    //tablet // IPAD


`
const MonitorTitle = styled.img`
    z-index: 1;
    position: relative;
    width: 100%;
    clip-path: inset(0 0 30% 0);
    height: 950px;

    //tablet // IPAD
    @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (-webkit-min-device-pixel-ratio: 1) {
        clip-path: inset(0 0 45% 0);
    }
   


`
const Navbar = styled.div`
    background: #86B998;
    overflow: hidden;
    margin-left:30px;
    margin-right:38px;
    margin-top:30px;
    height: 100vh;
    @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (-webkit-min-device-pixel-ratio: 1) {
    height: 40vh;

}

`
const TextTitle = styled.div`
    display:flex;
    flex-direction: row;
    margin-top: 4rem;
`
const UpperNav = styled.div`
    display:flex;
    height:auto;
    position: relative;
  

`
const TitleBarUp = styled.h1`
    position: relative;
    padding: 13px 87px 0 0;
    left: 42%;
    top: 2%;
    z-index: 4;
    color: #FFFF;
    overflow: visible;
    background-color: #000000a6;
    border-style: dashed;
    font-family: Gotham_KTR;
    font-style: normal;
    font-weight: bold;
    line-height: 100%;
    color: #FFFFFF;
    width: 44%;

    //tablet // IPAD
    @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (-webkit-min-device-pixel-ratio: 1) {
    margin: 6px 0px;

    

    }

`
const TitleBarDown = styled.h1`
 position: absolute;
    width: 100%;
    left: 42%;
    top: 41%;
    z-index: 4;
    color: #FFFF;
    overflow: visible;
    background-color: #000000a6;
    border-style: dashed;
    z-index: 10;
`
const TitleBar = styled.div`
      position: absolute;
    left: 0%;
    top: 25%;
    width: 100%;
    font-size: 3rem;
    @media(max-width:1666px){
        font-size: 40px;

    }
    //tablet // IPAD
    @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (-webkit-min-device-pixel-ratio: 1) {
        font-size: 24px;
    top: 50%;
    margin-left: 45px;
    }
    @media only screen 
    and (min-device-width: 1024px) 
    and (max-device-width: 768px) 
    and (-webkit-min-device-pixel-ratio: 1) {
        font-size: 24px;
    top: 50%;
    margin-left: 45px;
    }


`
const Span = styled.span`
    color: #fff;
    font-size: 30px;
    //tablet
    @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (-webkit-min-device-pixel-ratio: 1) {
        font-size: 18px;  
       
        

    }


`
const Title = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 120%;
    margin:0 0;
    color: #fff;
    //tablet // IPAD
    @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (-webkit-min-device-pixel-ratio: 1) {
        font-size: 19px;    
        

    }


`

export default Nav
