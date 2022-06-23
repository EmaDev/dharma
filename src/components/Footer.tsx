import styled from 'styled-components';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';

const Container = styled.footer<any>`
   background-color: ${({ bgCol }) => bgCol};
   padding: 1.5rem;
   p{
    text-align: center;
    font-family: unset;
    color: ${({ color }) => color};
   }
`;

const Contact = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color};
  p{
    margin: 0;
    font-size: 2rem;
    font-weight: bold;
  }
`;

const IconsContact = styled.div`
   margin: auto;
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 1rem 2rem;
   background-color: red;
`;
const getYear = () => {
    let date = new Date;
    return date.getFullYear();
}
export const Footer = () => {

    return (
        <Container bgCol='#1C1B1B' color='#929292'>
            <Contact color='#929292'>
                <ImLocation size='3rem' />
                <p>San Justo</p>
            </Contact>
            
            <p>{`Todos los derechos reservados ${getYear()} ©`}</p>
        </Container>
    )
}
