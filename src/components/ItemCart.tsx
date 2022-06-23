import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { itemCart } from '../context/cartReducer';
import { GiCancel } from 'react-icons/gi';
import { MoreLessButton } from './layouts/MoreLessButton';

interface Props {
    item: itemCart;
    updateItem: (id: string, quant: number) => void;
    removeItem: (id: string) => void;
}
const ItemCard = styled.div<any>`
   padding: 1rem .5rem;
   border: 1px solid ${({ bgCol }) => bgCol};
   color: ${({ color }) => color};
   border-radius: 2px;
   margin:auto;
   display: grid;
   grid-template-columns: 55% 33% 12%;
   align-items: center;
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

export const ItemCart = ({ item, updateItem, removeItem }: Props) => {
    const { name, price, quantity, img, prodId } = item;
    const [quantityBtn, setQuantityBtn] = useState<number>(quantity);

    useEffect(() => {
        setQuantityBtn(quantity);
    }, [quantity]);

    const handleUpdateQuatityInCart = (quant: number) => {
        updateItem(prodId, quant);
    }

    return (
        <ItemCard>
            <p style={{ margin: '0 .5rem', fontSize: '1.6rem', fontWeight: 'bold'}}>{name}</p>
            <MoreLessButton
                number={quantityBtn}
                setNumber={setQuantityBtn}
                callback={handleUpdateQuatityInCart}
                max={20} min={1} />

            <ButtonRemove
            onClick={() => removeItem(prodId)}
            >
                <GiCancel color='red'/>
            </ButtonRemove>
        </ItemCard>
    )
}
