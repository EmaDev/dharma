import styled from 'styled-components';
import { NavBar } from './layouts/NavBar';

const fondoXs = require('../assets/fondo480x500.png');
const fondoXl = require('../assets/fondo920x620.png');
const fondoXxl = require('../assets/fondo1024x720.png');
const fondoXxxl = require('../assets/fondo1280x720.png');

const Container = styled.section`
   background: url(${fondoXs});
   background-position: center top;
   height: 90vh;
   background-size: cover;
   position: relative;
   margin-bottom: -3px;
   
   @media(min-width: 500px){
    height: 100vh;
    background: url(${fondoXl});
    background-position: center bottom;
    background-repeat: no-repeat;
    background-color: ${({ color }) => color};
   }
   @media(min-width: 920px){
    background: url(${fondoXxl});
    background-position: center bottom;
    background-repeat: no-repeat;
    background-color: ${({ color }) => color};
   }
   @media(min-width: 1028px){
    background: url(${fondoXxxl});
    background-position: center bottom;
    background-repeat: no-repeat;
    background-color: ${({ color }) => color};
   }

   background-color: ${({ color }) => color};
`;


export const Header = () => {
  return (
    <Container color='#080808'>
      <NavBar />
    </Container>
  )
}
