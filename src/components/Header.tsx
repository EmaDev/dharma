import styled from 'styled-components';
import { NavBar } from './layouts/NavBar';

const bgMobile = require('../assets/hero-full.svg');

const Hero = styled.header`
   position:relative;
   height: 500px;
   background: #470b20 url(${bgMobile.default});
   background-size: cover;
   background-repeat: no-repeat;
   background-position:center;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items:center; 
   @media(min-width: 600px){
    display:none;
   }
`;

const Image = styled.img`
   width: 330px;
   position: absolute;
   left: 1rem; right: 0;
   bottom: 65px;
   margin:auto;
`;

export const Header = () => {

  return (
    <>
      <NavBar />
      <Hero>

        <Image className='burger-hero' src={require('../assets/burgers.png')} />
      </Hero>
    </>
  )
}
