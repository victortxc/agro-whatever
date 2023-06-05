import React from "react";
import {Container, LogoContainer, LogoText, MenuContainer, MenuItem} from './styles';
import logo from '../../assets/logo.png';
import {RiAccountCircleFill} from 'react-icons/ri';

export function Header() {
    return(
        <Container>
            <LogoContainer>
            <img src={logo} width={50} alt="logo" />
                <LogoText>Agro Whatever</LogoText>
            </LogoContainer>
            <MenuContainer>
                <MenuItem href="/">Home</MenuItem>
                <MenuItem href="/">Blog</MenuItem>
                <MenuItem href="/">Chat</MenuItem>
                <MenuItem href="/">Contact</MenuItem>
                <RiAccountCircleFill color="white" size={40} />
            </MenuContainer>
        </Container>
    );
}
