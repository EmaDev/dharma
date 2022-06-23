import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { MdMenu } from 'react-icons/md';
import { IoMdClose} from 'react-icons/io';
import { CartContext } from '../../context/CartContext';

const Container = styled.div`
   padding: 1.5rem;
   background-color: black;
   position: fixed;
   top: 0; left: 0;
   width: 100%;
   border-bottom: 1px solid orange;
   z-index: 9999;
`;

const NavMenuContent = styled.nav`
   max-width: 992px;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const Title = styled.div<any>`
   span{
    font-size: 2.2rem;
    margin: 0;
    font-weight: bold;
   }
   display:flex;
   align-items: center;
   padding: .5rem 1rem;
`;
const MenuUl = styled.ul`
   display:flex;
   list-style: none;
   li{
    font-size: 2rem;
    margin: 0 1rem;
    line-height: 4rem;
    text-transform: uppercase;
    width: max-content;
    cursor: pointer;
    paddding: 0.8rem 1rem;
    border-radius: 0.3rem;
   }
   
   a{
    color: white;
    text-decoration: none;
    margin: 0 .5rem;
   }

   li:hover{
    background-color: purple;
    transition: .5s;
   }

   @media (max-width: 768px){
    display: none;
   }
`;

const BurgerButton = styled.button`
   color: white;
   border: none;
   border-style: none;
   background: none;
   display: flex;
   align-items: center;
   a{
    margin: 0 5px;
    margin-top: 2px;
    padding: 0;
    text-decoration: none;
   }

   @media (min-width: 768px){
    display: none;
   }
`;
const NavMenuContentMobile = styled.ul`
   width: 100%;
   background-color: black;
   list-style: none;
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin:auto;

   li{
    font-size: 1.7rem;
    width: 100%;
    line-height: 4rem;
    text-transform: uppercase;
    cursor: pointer;
    paddding: 1rem;
    text-align:center;
    border-radius: .3rem;
   }
   
   a{
    color: white;
    text-decoration: none;
    margin: 0 .5rem;
   }

   li:hover{
    background-color: purple;
    transition: .5s;
   }
   @media (min-width: 768px){
    display: none;
   }
`;


export const NavBar = () => {

    const [activeMenu, setActiveMenu] = useState(false);
    const { cart } = useContext(CartContext);
    const handleToggle = () => {
        setActiveMenu(!activeMenu);
    }

    return (
        <Container>
            <NavMenuContent>
                <Title>
                    <span style={{ color: 'white' }}>Food</span>
                    <span style={{ color: 'purple' }}>AndEat</span>
                </Title>
                <MenuUl>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#carrito">Carrito</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </MenuUl>
               
                <BurgerButton onClick={handleToggle}>
                    {(activeMenu) ?
                        <IoMdClose size='4rem' />
                        :

                        <MdMenu size='4rem' />

                    }
                </BurgerButton>
            </NavMenuContent>
            {
                (activeMenu) &&
                <NavMenuContentMobile>
                    <li onClick={handleToggle}><a href="#menu">Menu</a></li>
                    <li onClick={handleToggle}><a href="#contacto">Contacto</a></li>
                    {(cart.length > 0) && <li onClick={handleToggle}><a href="#carrito">Carrito</a></li>}
                </NavMenuContentMobile>
            }
        </Container>
    )
}
