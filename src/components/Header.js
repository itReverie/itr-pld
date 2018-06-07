import React from 'react';
import styled from 'styled-components';
import BurgerIcon from '../utils/BurgerIcon.js';
import Menu from '../utils/Menu';
import Popup from "reactjs-popup";


const HeaderContainer=styled.div`
    display:flex;
    justify-content:space-around;
    background-color:#6a2d1c;
    color:#ffffff
`;

const Title=styled.div`
    cursor: pointer;
`;

const contentStyle = {
    background: "rgba(255,255,255,0",
    width: "80%",
    border: "none"
  };
  
const Header=props=>(
    <HeaderContainer>
        <Title>Habitaciones</Title>
        <Title>Que Hacer</Title>
        <Title>Como Llegar</Title>
        <Title>Contacto</Title>
        <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98" }}
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <BurgerIcon open={open} />}
    >
      {close => <Menu close={close} />}
    </Popup>
    </HeaderContainer>);

export default Header;