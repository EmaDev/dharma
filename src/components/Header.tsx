import styled from 'styled-components';
import { NavBar } from './layouts/NavBar';

const bgMobile = require('../assets/bg-mobile.png');
const bgXl = require('../assets/xxxl-back.png');
//const bgXxl = require('../assets/xxxl-back.png');

const Container = styled.section`
   @media( max-width: 500px){
    height: 420px;
    margin-top: 2rem;
    margin-bottom: -3px;
    background: url(${bgMobile});
    background-position: center bottom;
    background-size: cover;
    background-color: ${({ color }) => color};
   }
   
   @media(min-width: 500px){
    height: 420px;
    margin-top: 1rem;
    margin-bottom: -3px;
    background: url(${bgXl});
    background-position: center bottom;
    background-repeat: no-repeat;
    background-color: ${({ color }) => color};
   }
   @media(min-width: 1180px){

   }
`;


export const Header = () => {
  return (
    <Container color='#080808'>
      <NavBar />
    </Container>
  )
}
