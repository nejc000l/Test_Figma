import React from 'react'
import styled from 'styled-components'

const InfoCard = () => {
    return (
       
       <div>
       <Container>
            <Title>
                ŽELJE IN IZZIVI
            </Title>
            <Dots>
                <svg width="118" height="1" viewBox="0 0 118 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="118" y1="0.5" y2="0.5" stroke="#86B998" stroke-dasharray="3 4"/>
                </svg>
            </Dots>
            <Card>
                <p>
                350-450 Podjetje je vse do konca leta 2019 ponujalo v najem potniške kombije brez spletne podobe. 
                Za njihovo digitalizacijo je bilo potrebno vzpostaviti celoten spletni sistem – od pregleda trga, načrtovanja, oblikovanja, postavitve spletne strani in oglaševanja. 
                Podjetje je vse do konca leta 2019 ponujalo v najem potniške kombije brez spletne podobe. 
                Za njihovo digitalizacijo je bilo potrebno vzpostaviti celoten spletni sistem – od pregleda trga, načrtovanja, oblikovanja, postavitve spletne strani in oglaševanja. 
                </p>
            </Card>
        </Container>
        <Container>
            <Title>
                VPELJANJE REŠITEV
            </Title>
            <Dots>
                <svg width="118" height="1" viewBox="0 0 118 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="118" y1="0.5" y2="0.5" stroke="#86B998" stroke-dasharray="3 4"/>
                </svg>
            </Dots>
            <Card>
                <p>
                350-450 Podjetje je vse do konca leta 2019 ponujalo v najem potniške kombije brez spletne podobe. 
                Za njihovo digitalizacijo je bilo potrebno vzpostaviti celoten spletni sistem – od pregleda trga, načrtovanja, oblikovanja, postavitve spletne strani in oglaševanja. 
                Podjetje je vse do konca leta 2019 ponujalo v najem potniške kombije brez spletne podobe. 
                Za njihovo digitalizacijo je bilo potrebno vzpostaviti celoten spletni sistem – od pregleda trga, načrtovanja, oblikovanja, postavitve spletne strani in oglaševanja. 
                </p>
            </Card>
        </Container>
        </div>
    )
}
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 2rem 0;
    border-bottom:10px solid rgba(255, 255, 255, 0.119);
    height:70vh;
    padding-bottom: 10rem;
    @media(max-width:768px){
        height:37vh;
    }
    
`
const Card = styled.div`
   /* R */

width: 100%;

font-family:" Gotham-Book";
font-style: normal;
font-weight: normal;
line-height: 130%;
/* or 26px */
text-align: center;
font-size: 1.4rem;
padding: 1px 40rem;

color: #1C1C1C;
@media(max-width:1600px){
    font-size: 1.5rem;
    padding: 1px 20rem;
    height: 20vh;

    }
@media(max-width:1024px){
    font-size: 1rem;
    padding: 1px 10rem;
    height: 40vh;

    }
    @media(max-width:768px){
    font-size: 13px;
    
    

    }
    @media(max-width:480px){
        font-size:10px;
        padding: 3rem;
        height: 10vh;


    }

`
const Title = styled.div`

    color: #86B998;
    font-weight: 700;   
    font-size:30px;
    @media(max-width:920px){
        font-size: 20px;
    }

`
const Dots = styled.div`
    font-size:40px;
    

`



export default InfoCard
