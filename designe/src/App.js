
import React from 'react';
import Buttons from './components/Button'
import './App.css';
import styled from 'styled-components'
import Nav from './components/Nav'
import ImageBox from './components/ImageBox';
import Cards from './components/Cards'
import Carousel2 from './components/Corusel2'
import InfoCard from './components/Info'
import InformationCards from './components/InformationCards'
import InformationCards2 from './components/InformationCards2'
import Img1 from './img/SPRDdigital_DellaSpina_kako-deluje_monitor.png'
function App() {
  return (
   <Main>
   <Container>
      <Nav/>
    </Container>
    <Container>
      <Cards/>
   </Container>
   <SliderContainer>
    <Carousel2/>
    <Buttons/>
   </SliderContainer>
   <Container>
     <InfoCard/>
   </Container>
   <ImageContainer>
     <Image src={Img1}/>
     <Buttons/>
   </ImageContainer>
   <ContainerUpperCards>
   <InformationCards />
   </ContainerUpperCards>
   <ContainerDownCards>
   <InformationCards2/>

   </ContainerDownCards>
    </Main>
  );
}
const Container = styled.div`
 
  `

  
const ContainerUpperCards = styled.div`
  margin-bottom: 10rem;
`
const ContainerDownCards = styled.div`

`
const Main = styled.div`
position:absolute;
width: 100%;
`
const SliderContainer = styled.div`
width: 100%;
background: #86B998;
overflow: hidden;
position: relative;

`
const ImageContainer = styled.div`
  width: 100%;
  text-align: center;
  position: relative;
`
const Image = styled.img`
  width: 75%;
`
export default App;
