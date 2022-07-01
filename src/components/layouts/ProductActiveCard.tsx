import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { itemCart } from '../../context/cartReducer';
import { Button } from './Button';
import { Extras } from './Extras';
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

const ExtrasButton = styled.div`
    margin: 1rem;
    text-align: start;
    display: flex;
    justify-content: start;
    align-items: center;
    span{
        font-size: 2rem;
        font-weight: bold;
        color: #fff;
        margin-right: .5rem;
    }

`;

interface ProductProps {
    product: Product;
    addProdToCart: (item: itemCart) => void;
}
interface Product {
    name: string;
    ingredients: string;
    id: string;
    img: string;
    price: number;
    extras?: Extras
}
interface Extras {
    chedar: number;
    meat: number;
}
export const ProductActiveCard = ({ product, addProdToCart }: ProductProps) => {

    const [quantityState, setQuantityState] = useState<number>(1);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isExtrasActive, setIsExtrasActive] = useState<boolean>(false);
    const [extrasState, setExtrasState] = useState<Extras>({chedar: 0, meat: 0});
    const {chedar, meat} = extrasState;
    const { id, ingredients, name, price, img } = product;

    useEffect( () => {
        setQuantityState(1);
    },[product]);

    const addProductToCart = () => {
        addProdToCart({
            price: price,
            name: name,
            quantity: quantityState,
            extras: (chedar != 0 || meat != 0) ? 
            {chedar, meat}
            :
            null,
            prodId: (chedar === 0 && meat === 0) 
            ? id : 
            `${id}-${chedar}&${meat}`,
        });
    }

    const handleSetIsExtrasActive = () => {
        setExtrasState({chedar: 0, meat: 0});
        setIsExtrasActive(!isExtrasActive);
    }

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, [id]);

    return (
        <>
            {
                (isLoading) ? <div style={{ height: '250px', display: 'flex', justifyContent: 'center' }}><Spinner /></div>
                    :
                    <Image src={img} alt={`${name} imagen`} />
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
            <ExtrasButton>
                <span>Extras</span>
                <input type={'checkbox'} 
                onChange={handleSetIsExtrasActive}
                checked={isExtrasActive}/>

            </ExtrasButton>
            { 
              (isExtrasActive) && 
              <Extras 
              setState={setExtrasState}
              />
            }
            <Button onClick={addProductToCart} text='Agregar al Carrito' />
        </>
    )
}
