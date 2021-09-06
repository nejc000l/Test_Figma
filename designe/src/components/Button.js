import React from 'react'
import styled from 'styled-components'
const Buttons = () => {
    return (
       <div>
        <Button>KAKO DELUJE</Button>
        </div>
    )
}
const Button = styled.button`
    
    z-index: 1;
    position: absolute;
    left: 38%;
    top: 68%;
    padding: 1.5% 9%;
    background: #86B998;
    border:none;
    color: #FFFF;
    cursor: pointer;
    font-size: 20px;
    font-family: "Gotham-Book";
    color: white;
    @media(min-width:1920px){
        top: 70%;
    }
    @media(max-width:1920px){
        top: 70%;
    }
    @media(max-width:1457px){
        top: 68%;
    }
    @media(max-width:1024px){
        display: none;
    }
    
`


export default Buttons
