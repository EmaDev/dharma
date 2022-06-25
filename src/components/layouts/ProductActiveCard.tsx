import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { itemCart } from '../../context/cartReducer';
import { Button } from './Button';
import { MoreLessButton } from './MoreLessButton';
import { Spinner } from './Spinner';

const Name = styled.h2`
   font-size: 2.5rem;
   color: ${({ color }) => color};
   padding: 1rem;
   /*border-bottom: 1px solid  ${({ color }) => color};
   border-top: 1px solid  ${({ color }) => color};*/
   border-bottom: 1px solid purple;
   border-top: 1px solid purple;
`;
const Image = styled.img`
   width: 250px;
   height: 250px;
   margin:auto;

   &hover:{
      background-color: red;
   }
`;

const Description = styled.p`
   text-align: center;
   font-size: 2rem;
`;

const OrderButtons = styled.div`
   display: flex;
   width: 80%;
   margin:auto;
   justify-content: space-between;
   align-items: center;
   color: white; 

   span{
      font-size: 1.6rem;
   }
`;

const Precio = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;
interface ProductProps {
    product: Product;
    addProdToCart: (item: itemCart) => void;
}
interface Product {
    name: string;
    ingredients: string;
    id: string;
    img: number;
    price: number;
    extras?: {
        chease: number;
        meat: number;
    }
}
export const ProductActiveCard = ({ product, addProdToCart }: ProductProps) => {

    const [quantityState, setQuantityState] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { id, ingredients, name, price, img } = product;

    const addProductToCart = () => {
        addProdToCart({
            price: price,
            name: name,
            quantity: quantityState,
            prodId: id
        });
    }

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        },500);
    }, [id]);

    return (
        <>
            {
                (isLoading) ? <div style={{height: '250px', display: 'flex', justifyContent: 'center'}}><Spinner/></div>
                :
                <Image src={require(`../../assets/hamburger${img}.png`)} alt={`${name} imagen`} />
            }
            <Name color="white">{name}</Name>
            <Description>{ingredients}</Description>
            <OrderButtons>
                <div>
                    <span>Precio</span>
                    <Precio>{`$ ${price}`}</Precio>
                </div>
                <div>
                    <span>Cantidad</span>
                    <MoreLessButton
                        number={quantityState}
                        setNumber={setQuantityState}
                        max={20} min={1} />
                </div>
            </OrderButtons>
            <Button onClick={addProductToCart} text='Agregar al Carrito'/>
        </>
    )
}
