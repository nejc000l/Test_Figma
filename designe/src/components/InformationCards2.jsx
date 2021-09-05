import React from 'react'
import styled from 'styled-components'
import './InformationCards.css'
const InformationCards2 = () => {
    return (
        <Container>
            <RightContainer className="title">
                    <Title className="right-container-title">
                    Končno lažji nakup diotripskih očal
                    </Title>
                    <p className="right-container-ptag">
                      Brezplačno preizkusite 3 očala z svojo dioptrijo in po sedmih dneh v miru odčite.Preizkus na domu in poštnina sta brezplačna.
                    </p>
                  <Button>VEČ INFORMACIJ</Button>
            </RightContainer>
            <LeftContainer>
            <Dots></Dots>
                    <Title>
                        Fokus 40-60 Vestibulum ornare enim vel quam dictum, feugiat
                    </Title>
                    <p>
                        160-250 Porttitor neque pharetra. Pellentesque mattis tristique ipsum eget viverra. Phasellus semper dapibus ipsum eget porta. Nunc vitae justo ac lacus finibus convallis.
                    </p>
            </LeftContainer>
        </Container>
    )
}
const Container = styled.div`
    display:grid;
    margin: 2rem 10%;
    grid-template-columns: 60% 40%;
    grid-gap: 20px;
    grid-template-rows: minmax(100px,auto);

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
    padding: 0 3rem;

`


const RightContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;
    padding: 4rem 7rem;
   position: relative;
   background: #faf3f3b5;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

`
const Dots = styled.div`
    border:1px dashed #86B998;
    width:30%;
`
const Title = styled.h1`
    font-size: 40px;
    font-weight: 700;
`
export default InformationCards2
