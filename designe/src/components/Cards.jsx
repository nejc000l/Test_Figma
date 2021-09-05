import React from 'react'
import styled from 'styled-components'
import './Slider.css'

const Cards = () => {
    return (
        <Container>
               <EmptyBox/>
               <CardsContainer>
                   <Card>
                   <p>150-200 Spletna Optika, ki je v celoti
                   integrirana v ERP.<br/> Odoo preko katerga beleži vse dogodke na spletni strani platformi in omogoča povezvanje on-line/off-line</p>
                   
                   </Card>
                   <Card>
                
                  <ContainerInside>
                      <Span>N</Span><PTag>Della Spin,<br/>Slovenia, 2018</PTag>
                    
                  </ContainerInside>
                  <ContainerInside>
                      <Span>S</Span><PTag><li>Web Development,</li><br/><li>UX/UI</li><br/><li>Integracija Odoo</li><br/></PTag>
                    
                  </ContainerInside>
                  <ContainerInside>
                      <Span>U</Span><PTag><Link>wwww.dellaspina.com</Link></PTag>
                    
                  </ContainerInside>
               
               
                   </Card>

               </CardsContainer>
        </Container>
    )
}
const Container = styled.div`
`
const EmptyBox = styled.div`
    height: 20vh;

`
const CardsContainer = styled.div`
   display: flex;
   flex-direction: row;
   width:100%;    
    padding-bottom:10rem;
    height:auto;
   padding-right: 14%;
    padding-left: 14%;
    overflow: hidden;
`
const Card = styled.div`
    text-align: left;

   
    /* height: 0; */
    font-size: 4rem;
    font-family: 'Gotham-Book';
    color:#1C1C1C;
    display: flex;
    flex-direction: column;
`


const ContainerInside = styled.div`
   display: flex;
   margin-left: 15rem;
   margin-bottom: 10px;

`

const PTag = styled.span`
   margin:0;
   font-size: 1.5rem;
`
const Span = styled.span`
   color:#797979;
   margin-right: 25px;
   font-size: 1.5rem;
`
const Link = styled.a`
    cursor: pointer;
    text-decoration: underline;
    



`
export default Cards
