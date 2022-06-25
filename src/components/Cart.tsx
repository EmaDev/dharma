import { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';
import { ThemeContext } from '../context/ThemeContext';
import { ItemCart } from './ItemCart';

const Container = styled.section<any>`
   height: 100%;
   max-width: 600px;
   margin: auto;
   padding: 1.5rem;
   //background-color: ${({ bgCol }) => bgCol};
   color: ${({ color }) => color};
   border: 1px solid purple;
   box-shadow: 1px 1px 12px purple;
   h1{
    text-align: center;
    font-size: 2.5rem;
   }

   @media(max-width: 800px){
    margin: 1rem auto;
    width: 90%;
   }
`;
const ContainerButtons = styled.div`
   margin: 2.5rem 0;
   display: flex;
   justify-content: space-between;
   align-items: center;

   h5{
    font-size: 1.9rem;
    font-weight: bold;
    margin: 0;
   }
`;

const ButtonConfirm = styled.button`
   background-color: purple;
   padding: 1rem .3rem;
   border-radius: 6px;
   a{
    text-decoration: none;
    color: white;
    font-size: 1.6rem;
    font-weight: bold;
   }
`;

export const Cart = () => {

    const { cart, updateItem, removeItemToCart } = useContext(CartContext);
    const { theme } = useContext(ThemeContext);

    const totalCalculator = () => {
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
        });
        return (<h5>{`Total: $ ${total}`}</h5>)
    }

    const setMessageOrder = () => {
        let msg = '';
        cart.forEach((item, i) => {
            if (i === 0) {
                msg += `${item.name}X${item.quantity}`;
            } else {
                msg += ` - ${item.name}X${item.quantity}`;
            }
        });

        return (
            <a id="app-whatsapp" target="_blanck"
                href={`https://api.whatsapp.com/send?phone=+541164340872&text=${msg}`}>
                Confirmar Pedido
            </a>
        )
    }

    if (cart.length === 0) {
        return <></>
    }

    return (
        <Container 
        id="carrito"
        //bgCol={theme.palette.bgColor} 
        bgCol='#1C1B1B'
        color={theme.palette.txtPrimary}>
            <h1>Tu Pedido</h1>
            {
                cart.map(item => (
                    <ItemCart key={item.prodId} item={item}
                        updateItem={updateItem}
                        removeItem={removeItemToCart}
                    />
                ))
            }
            <ContainerButtons>
                {totalCalculator()}
                <ButtonConfirm>
                    {setMessageOrder()}
                </ButtonConfirm>
            </ContainerButtons>
        </Container>
    )
}
