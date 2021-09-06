import React,{useState} from 'react'
import styled from 'styled-components'
import './Slider.css'
// images
import Vector from '../img/Vector.svg'
import SpdrMonitor from '../img/SPRDdigital_DellaSpina_naslovna_monitor.png'
import TableMonitor from '../img/SPRDdigital_DellaSpina_naslovna_tablica.png'
import PhoneMonitor from '../img/SPRDdigital_DellaSpina_naslovna_telefon_listing.png'
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
                <TitleBarDown className="down">Spletne prodaje očal</TitleBarDown>

                </TitleBar>

            </UpperNav>
            <PhoneTitle>
                    <Title1>Smo</Title1>
                    <Title2>najkulejša</Title2>
                    <Title3>digitalna</Title3>
                    <Title4>agencija</Title4>
                    
                </PhoneTitle>
            <Images>
                <MonitorTitle src={SpdrMonitor} className="monitor-title-desk" alt="" />
                <MonitorTitle src={TableMonitor} className="monitor-title-tablet" alt="" />
                <MonitorTitle src={PhoneMonitor} className="monitor-title-phone" alt="" />
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
    left: 1%;
    position: absolute;
   
`
const PhoneTitle = styled.div`
    position: relative;
    overflow: none;
    height: 28%;
    font-size:2rem;
    
       @media (min-width: 480px){
           display: none;

       }
  

`
const Title1 = styled.div`
    z-index: 4;
    color: #FFFF;
    overflow: visible;
    background-color: #000000a6;
    border-style: dashed;
    font-family:"Gotham-Book";
    font-style: normal;
    font-weight: bold;
    
    color: #FFFFFF;
    width: 21%;
    position: absolute;
    top: 12%;
    padding-bottom:10px;


`
const Title2 = styled.div`
       z-index: 4;
    color: #FFFF;
    overflow: visible;
    background-color: #000000a6;
    border-style: dashed;
    font-family:"Gotham-Book";
    font-style: normal;
    font-weight: bold;
    color: #FFFFFF;
    width: 46%;
    position: absolute;
    top: 34%;
    padding-bottom:10px;


`
const Title3 = styled.div`
   z-index: 4;
    color: #FFFF;
    overflow: visible;
    background-color: #000000a6;
    border-style: dashed;
    font-family:"Gotham-Book";
    font-style: normal;
    font-weight: bold;
    color: #FFFFFF;
    width: 46%;
    position: absolute;
    top: 55%;
    padding-bottom:10px;

`
const Title4 = styled.div`
      
      z-index:1;
    color: #FFFF;
    overflow: visible;
    background-color: #000000a6;
    border-style: dashed;
    font-family:"Gotham-Book";
    font-style: normal;
    font-weight: bold;
    line-height: 100%;
    color: #FFFFFF;
    width: 20;
    position: absolute;
    top:78%;
    padding-bottom:10px;

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

    @media screen and (max-width:1200px){
        padding: 15px 50px;
    } 
    @media screen and (max-width:1200px){
        top: 10px 50px;
    } 

    @media(max-width:1022px){
        top: 55%;
        left: 17%;
    }
    @media(max-width:920px){
        top: 55%;
        left: 20%;
        padding: 15px 20px;
    }
    @media(max-width:768px){
        top: 44%;
        left: 17%;
        padding: 16px 20px;
        cursor: pointer;
    }
    
    @media only screen 
  and (min-device-width: 100px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    top: 63%;
    left: 17%;
    width: 66%;
    padding: 14px;
}






`
const MonitorTitle = styled.img`
    z-index: 1;
    position: relative;
    width: 100%;
    clip-path: inset(0 0 30% 0);
    /* height: 950px;
   
    @media screen and (min-width: 1024px)  {
    height:920px;
    } 
   */
 

    //tablet // IPAD
    @media only screen 
    and (max-device-width: 768px) {
        clip-path: inset(0 0 45% 0);

    }
    @media only screen and (max-device-width:480px){
        clip-path: inset(0 0 26% 0);
    }
   


`
const Navbar = styled.div`
    background: #86B998;
    overflow: hidden;
    margin-left:30px;
    margin-right:38px;

    margin-top:30px;
    height: 100vh;
    margin-bottom: 15%;
   
    @media(max-width: 1600px)  {
        height: 90vh;   
         margin-bottom:10%;
    } 
    @media(max-width: 1412px)  {
        height: 75vh;
    margin-bottom: 11%;  
    } 
    @media(max-width: 1024px)  {
        height: 50vh;   
        margin-bottom: 20%;   
     } 

    @media(max-width: 920px)  {
        margin-bottom: 15%;
    height: 53vh;

    } 

    @media(max-width: 768px)  {
        height: 60vh;
    margin-bottom: 15%;
    } 
    @media(max-width: 490px)  {
        height: 85vh;
    margin-bottom: 51%;
    margin-left:0;
    margin-right:0;
    margin-top: 0;
}
  



`
const TextTitle = styled.div`
    display:flex;
    flex-direction: row;
    margin-top: 4rem;
    @media(max-width:1024px) {
        margin-top:2rem;
    }
    @media(max-width:490px) {
        margin-top:1rem;
    }
`
const UpperNav = styled.div`
    display:flex;
    height:auto;
    position: relative;
  

`
const TitleBarUp = styled.h1`
    position: relative;
    /* padding: 13px 87px 0 0; */
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
    line-height: 110%;
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
        font-size: 2rem;
        top:40%;
    }
    @media(max-width:1145px){
        font-size: 1.5rem;
        top:50%;
    }
    @media(max-width:926px){
        font-size: 1.2rem;
        top:50%;
    }

    @media(max-width:640px){
        font-size: 1rem;
       top:60%;
    }

    //tablet // IPAD
    @media only screen 
    and (min-device-width: 768px) 
    and (max-device-width: 1024px) 
    and (-webkit-min-device-pixel-ratio: 1) {
    font-size: 1.4rem;
    top: 50%;
    margin-left: 45px;
    }
    //phone    

    @media only screen 
  and (min-device-width: 100px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    display: none;
}


`
const Span = styled.span`
    color: #fff;
    font-size: 30px;
    //tablet
    @media (max-width:1548px)  {
        font-size: 18px;  
    }
    @media (max-width:920px)  {
        font-size: 15px;  
    }
    @media (max-width:768px)  {
        font-size: 12px;  
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
    @media (max-width:1548px)  {
        font-size: 18px;  
    }
    @media (max-width:920px)  {
        font-size: 15px;  
    }
    @media (max-width:768px)  {
        font-size: 12px;  
    }



`

export default Nav
