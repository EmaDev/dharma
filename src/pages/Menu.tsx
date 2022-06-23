import styled from 'styled-components';
import { ProductCard } from '../components/ProductCard';
import TitleSvgComponent from '../assets/TitleComponent';

const Container = styled.div`
   min-height: 100vh;
   background-color: ${({color}) => color};
`;


const Title = styled.div`
   margin:auto;
   margin-bottom:2rem;
   width: 90%;
   max-width: 500px;
`;
export const Menu = () => {
    return (
        <Container color='#080808' id='#menu'>
            <Title>
                <TitleSvgComponent style={{width: '100%', padding:'1rem 0'}}/>
            </Title>
            <ProductCard/>
            <br/><br/>
        </Container>
    )
}
