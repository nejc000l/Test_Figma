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
`
const Card = styled.div`
   /* R */

width: 611px;
height: 341px;
left: 294px;
top: 1970px;

font-family:" Gotham-Book";
font-style: normal;
font-weight: normal;
font-size: 30px;
line-height: 130%;
/* or 26px */
text-align: center;

color: #1C1C1C;


`
const Title = styled.div`

    color: #86B998;
    font-weight: 700;   
    font-size:30px;

`
const Dots = styled.div`
    font-size:40px;
    

`



export default InfoCard
