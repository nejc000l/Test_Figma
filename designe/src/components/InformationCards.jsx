import React from 'react'
import styled from 'styled-components'
import './InformationCards.css'
const InformationCards = () => {
    return (
        <Container>
        
            <LeftContainer>

            <Dots>
                {/* <svg width="118" height="1" viewBox="0 0 118 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="118" y1="0.5" y2="0.5" stroke="#86B998" stroke-dasharray="3 4"/>
                </svg> */}
            </Dots>
                <Title>
                    Fokus 40-60 Vestibulum ornare enim vel quam dictum, feugiat
                </Title>
                <p>
                    160-250 Porttitor neque pharetra. Pellentesque mattis tristique ipsum eget viverra. Phasellus semper dapibus ipsum eget porta. Nunc vitae justo ac lacus finibus convallis.
                </p>
                </LeftContainer>

                <RightContainer className="title">
                    
                   
                  <Title className="right-container-title">
                    Končno lažji nakup diotripskih očal
                  </Title>
                  <p className="right-container-ptag">
                      Brezplačno preizkusite 3 očala z svojo dioptrijo in po sedmih dneh v miru odčite.Preizkus na domu in poštnina sta brezplačna.

                  </p>
                  <Button>VEČ INFORMACIJ</Button>

                </RightContainer>
                


      
        </Container>
    )
}
const Container = styled.div`
    display:grid;
    margin: 2rem 10%;
    grid-template-columns: 40% 60%;
    grid-gap: 20px;
    grid-template-rows: minmax(100px,auto);
    @media(max-width:1024px){
        display:block;
      
    }

`

const Button = styled.button`
    z-index: 1;
    padding: 4.5% 9%;
    background: #86B998;
    border: none;
    color: #FFFF;
    cursor: pointer;
    font-size: 20px;
    font-family: "Gotham-Book";
    color: white;
`
const LeftContainer = styled.div`
    display:flex;
   
    flex-direction: column;
    width: 100%;
    font-size: 2rem;
    @media(max-width:1024px){
        margin-bottom: 40px;
    }
    @media(max-width:480px){
        font-size: 20px;
    }

`


const RightContainer = styled.div`
    display:flex;
    margin: 0 2rem;
    flex-direction: column;
    width: 100%;
    padding: 4rem 7rem;
   position: relative;
   background: #faf3f3b5;
   @media(max-width:1024px){
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    @media(max-width:480px){
        margin: 0;
    }
  
`
const Dots = styled.div`
    border:1px dashed #86B998;
    width:30%;
    @media(max-width:480px){
        font-size: 16px;
    }
`
const Title = styled.h1`
    font-size: 40px;
    font-weight: 700;
    @media(max-width:480px){
       
    }
`
export default InformationCards
