import { useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../context/CartContext';
import { ThemeContext } from '../context/ThemeContext';
import { ItemCart } from './ItemCart';

const Container = styled.section<any>`
   width: 90%;
   max-width: 600px;
   margin: auto;
   padding: 1.5rem;
   margin-bottom: 3rem;
   background-color: ${({ bgCol }) => bgCol};
   color: ${({ color }) => color};
`;
const ContainerButtons = styled.div`
   margin: 2.5rem auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
`;

const ButtonConfirm = styled.button`
   background-color: purple;
   padding: 1rem;
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
        return (<h1 style={{ textAlign: 'end', margin: 0 }}>{`Total: $ ${total}`}</h1>)
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
