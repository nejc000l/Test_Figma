import React from 'react'
import styled from 'styled-components'
import SpdrMonitor from '../img/SPRDdigital_DellaSpina_naslovna_monitor.png'

const ImageBox = () => {
    return (
        <div>
                  <Images>
                <MonitorTitle src={SpdrMonitor} className="monitor-title" alt="" />
                <Button>Več Informacij</Button>

            </Images>
            
        </div>
    )
}
const Images = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10%;
    margin-left:10%;
    position: relative;
   
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
    
`
const MonitorTitle = styled.img`
    z-index: 1;
    position: relative;
    width: 100%;
`

export default ImageBox
