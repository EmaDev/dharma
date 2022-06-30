import styled from 'styled-components';
import { ProductCard } from '../components/ProductCard';
import TitleSvgComponent from '../assets/TitleComponent';
import { Cart } from '../components/Cart';

const MenuSection = styled.section`
   background-color: ${({ color }) => color};
   padding: 2rem 0 4rem 0;
   margin: auto;
   padding-bottom: 3rem;
`;
const Container = styled.div`
   @media(min-width: 800px){
    margin: auto;
    display: grid;
    justify-content: center;
    grid-template-columns: 50% 50%;
    column-gap: .5rem;
   }
   @media(min-width: 1024px){
    width: 80%;
   }
`;
const Title = styled.div`
   margin:auto;
   margin-bottom:2rem;
   width: 90%;
   max-width: 500px;
`;
export const Menu = () => {
    return (
        <MenuSection color='#080808' id='menu'>
            <Title>
                <TitleSvgComponent style={{ width: '100%', padding: '1rem 0' }} />
            </Title>
            <Container>
                <ProductCard />
                <Cart />
            </Container>
        </MenuSection>
    )
}
