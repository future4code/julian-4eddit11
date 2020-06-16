import React from 'react'
import logo from '../../img/logo.png'
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {HeaderContainer, HeaderUser, HeaderImg, HeaderUserP} from './styles'


const Header = () => {
    const user = window.localStorage.getItem("username");

    return (
        <HeaderContainer>
            <HeaderImg src={logo} alt={'logo'}/>
            <HeaderUser>
          <span>
            <AccountCircleIcon />
          </span>
          <HeaderUserP>{user}</HeaderUserP>
        </HeaderUser>
        </HeaderContainer>
    )

}

export default Header
 
