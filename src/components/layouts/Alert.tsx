import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { IoMdClose, IoMdAlert } from 'react-icons/io';
import { ThemeContext } from '../../context/ThemeContext';
import { CartContext } from '../../context/CartContext';

interface Props {
    text?: string;
}

const Container = styled.div`
   position: fixed;
   left: 0; bottom:0;
   width: 100%;
`;
const AlertContent = styled.div`
   background-color: ${({ color }) => color};
   padding: 1rem;
   position: relative;
`;
const Text = styled.h3`
   text-align: center;
   font-size: 1.5rem;
   font-weight:bold;
   margin: 0;
   a{
    color: ${({ color }) => color};
    text-style: none;
   }
`;
const CloseButton = styled.button<any>`
   border: none;
   background-color: ${({ bg }) => bg};
   position: absolute;
   left: 5px;
   top: -10px;
   font-weight: bold;
   color: ${({ color }) => color};
   border-radius: 2rem;
   padding: .5rem;
`;
export const Alert = ({ text }: Props) => {
    const [activeButton, setActiveButton] = useState(true);
    const { theme } = useContext(ThemeContext);
    const {phone} = useContext(CartContext);
    return (
        <Container>
            {
                (activeButton) ?
                    <AlertContent color={theme.palette.purpleLigth}>
                        <Text color={theme.palette.txtPrimary}>
                            <a id="app-whatsapp" target="_blanck" 
                            href={`https://api.whatsapp.com/send?phone=+54${phone}&text=Quiero hacer un pedido`}>
                            {text}
                            </a>
                        </Text>
                        <CloseButton onClick={() => setActiveButton(false)}
                            color={theme.palette.txtPrimary} bg={theme.palette.purpleLigth}>
                            <IoMdClose size='2.5rem' />
                        </CloseButton>
                    </AlertContent>
                    :
                    <IoMdAlert size='3.5rem' color={theme.palette.purpleLigth} onClick={() => setActiveButton(true)} />
            }
        </Container>
    )
}
