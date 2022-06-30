import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { itemCart } from '../context/cartReducer';
import { GiCancel } from 'react-icons/gi';
import { MoreLessButton } from './layouts/MoreLessButton';

interface Props {
    item: itemCart;
    extrasPrice: {chedar:number;carne:number};
    updateItem: (id: string, quant: number) => void;
    removeItem: (id: string) => void;
}
const ItemCard = styled.div<any>`
   padding: 2rem .7rem;
   border: 1px solid ${({ bgCol }) => bgCol};
   color: ${({ color }) => color};
   border-radius: 2px;
   display: flex;
   align-items: center;
   overflow-x: auto;
`;

const ItemDescription = styled.div`
   margin-right: 1rem;
   display: flex;
   -webkit-box-align: center;
   align-items: center;
   justify-content: space-between;
   min-width: 75%;

   p{
    margin: 0 .3rem;
    padding: 0;
    font-size: 1.6rem;
    color: white;
   }
   span{
    font-size: 1.6rem;
    font-weight: bold;
    color: white;
    margin-left: 1.5rem;
   }

   div{
    display: flex;
    flex-direction: column;
    span{
        font-size: 1.4rem;
        color: grey;
        margin: 0;
    }
   }
`;

const ButtonRemove = styled.button`
   margin: auto;
   padding-left: 1rem;
   border: none;
   background: none;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 2.5rem;
`;

export const ItemCart = ({ item, updateItem, removeItem, extrasPrice }: Props) => {
    const { name, price, quantity, prodId, extras } = item;
    const [quantityBtn, setQuantityBtn] = useState<number>(quantity);

    useEffect(() => {
        setQuantityBtn(quantity);
    }, [quantity]);

    const handleUpdateQuatityInCart = (quant: number) => {
        updateItem(prodId, quant);
    }

    return (
        <ItemCard>
            <ItemDescription>
                {
                    (extras) ?
                        <div>
                            <p>{name}</p>
                            <span>{`+ ${extras.chedar} Chedar + ${extras.meat} Carne`}</span>
                        </div>
                        :
                        <p>{name}</p>
                }
                <span>{`$ ${
                    extras ? ( price + (extras.chedar * extrasPrice.chedar) + (extras.meat * extrasPrice.carne) )
                    :
                    price
                }`}</span>
            </ItemDescription>
            <MoreLessButton
                number={quantityBtn}
                setNumber={setQuantityBtn}
                callback={handleUpdateQuatityInCart}
                max={20} min={1} />

            <ButtonRemove
                onClick={() => removeItem(prodId)}
            >
                <GiCancel color='red' />
            </ButtonRemove>
        </ItemCard>
    )
}
