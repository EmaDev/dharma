import { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';
import { ThemeContext } from '../context/ThemeContext';
import { PHONE_NUMBER } from '../helpers';
import { ItemCart } from './ItemCart';

const Container = styled.section<any>`
   height: 100%;
   max-width: 600px;
   margin: auto;
   padding: 1.5rem;
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
const TotalText = styled.h5`
    font-size: 2.2rem;
    font-weight: bold;
    text-align: end;
    margin: 2rem 0;
`;

const ButtonConfirm = styled.button`
   background-color: purple;
   padding: 1rem .3rem;
   border-radius: 6px;
   width: 100%;
   a{
    text-decoration: none;
    color: white;
    font-size: 1.6rem;
    font-weight: bold;
   }
`;

export const Cart = () => {

    const { cart, updateItem, removeItemToCart, extras} = useContext(CartContext);
    const { theme } = useContext(ThemeContext);

    const totalCalculator = () => {
        let total = 0;
        cart.forEach(item => {
            if(item.extras){
                total += (item.price + 
                (item.extras.chedar * extras.chedar) + 
                (item.extras.meat * extras.carne)) * item.quantity; 
            }else{
                total += item.price * item.quantity;
            }
        });
        return (<TotalText>{`Total: $ ${total}`}</TotalText>)
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
                href={`https://api.whatsapp.com/send?phone=+54${PHONE_NUMBER}&text=${msg}`}>
                Confirmar Pedido
            </a>
        )
    }

    if (cart.length === 0) {
        return <></>
    }

    return (
        <>
            <Container
                id="carrito"
                color={theme.palette.txtPrimary}>
                <h1>Tu Pedido</h1>
                {
                    cart.map(item => (
                        <ItemCart key={item.prodId} item={item}
                            updateItem={updateItem}
                            removeItem={removeItemToCart}
                            extrasPrice={extras}
                        />
                    ))
                }
                    {totalCalculator()}
                <ButtonConfirm>
                    {setMessageOrder()}
                </ButtonConfirm>
            </Container>
        </>

    )
}
