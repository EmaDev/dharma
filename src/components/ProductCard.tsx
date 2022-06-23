import styled from 'styled-components';
import { BorderDiv } from './layouts/BorderDiv';
import { BiDownArrow } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import { useContext, useEffect, useState } from 'react';
import { ProductOptionCard } from './OptionSelect';
import { MoreLessButton } from './layouts/MoreLessButton';
import { CartContext } from '../context/CartContext';

const Container = styled.div`
   width: 90%;
   max-width: 400px;
   margin: auto;
   padding: .5rem;
   border: 1px solid #fff;
   color: #fff;
   text-align: center;
   position: relative;
`;

const Select = styled.div`
   font-size: 2.5rem;
   display: flex;
   align-items: center;
   justify-content: space-between;
   color: ${({ color }) => color};
   padding: 1rem 2rem;
   border-bottom: 1px solid  ${({ color }) => color};
   cursor: pointer;

   p{
      margin: 0;
      padding:0;
   }
`;
const Name = styled.h2`
   font-size: 2.5rem;
   color: ${({ color }) => color};
   padding: 1rem;
   border-bottom: 1px solid  ${({ color }) => color};
   border-top: 1px solid  ${({ color }) => color};
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

const SelectOptions = styled.div`
   max-height: 300px;
   overflow: auto;
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

interface Product {
   name: string;
   ingredients: string;
   id: string;
   img: number;
   price: number;
}
const PRODUCTS: Product[] = [
   { id: '186262', price: 690,img: 1,name: 'Chease Burger', ingredients: '200gr. de Carne, Doble Cheddar, Panceta,Cebolla (Crispy o Grilled), BBQ Jack Daniels' },
   { id: '4529', price: 540,img: 2,name: 'CUZCO HATUCHAY', ingredients: 'Queso reggianito, batata frita, sarza (cebolla, limón, jalapeño, cilantro) y salsa Huancaína' },
   { id: '8226', price: 980,img: 3,name: 'Gringa', ingredients: 'Queso cheddar, panceta ahumada, pepinos en pickle y ketchup DENIRO' },
   { id: '895996', price: 950,img: 4,name: 'Parrillera', ingredients: 'Queso provoleta con chimichurri, morcilla, morrón a la plancha, cebolla roja y ketchup ahumado' }
]


export const ProductCard = () => {
   const [products, setProducts] = useState<Product[]>(PRODUCTS);
   const [selectActive, setSelectActive] = useState<boolean>(false);
   const [activeProduct, setActiveProduct] = useState<Product>(PRODUCTS[0]);
   const [quantityState, setQuantityState] = useState<number>(1);
   const { addItemToCart } = useContext(CartContext);
   const { id, ingredients, name,price,img } = activeProduct;

   useEffect(() => {
      //TODO: traer productos
   });


   const handleSetProductActive = (id: string) => {
      const result = products.find(prod => prod.id === id);
      if (result) {
         setActiveProduct(result);
         setQuantityState(1);
         setSelectActive(false);
      }
   }

   const addProductToCart = () => {
      addItemToCart({
         price: 690,
         name: activeProduct.name,
         quantity: quantityState,
         prodId: activeProduct.id
      });
   }

   return (
      <Container>
         <BorderDiv size={{ height: 40, width: 5 }} position={'right'} dif={{ x: 70, z: 5 }} />
         <BorderDiv size={{ height: 20, width: 5 }} position={'left'} />
         <BorderDiv bottom size={{ height: 20, width: 5 }} position={'left'} />
         <BorderDiv bottom size={{ height: 20, width: 5 }} position={'right'} />

         <Select color="white" onClick={() => setSelectActive(!selectActive)}>
            <p>Selecciona</p>
            {(selectActive) ? <IoMdClose size='2rem' />
               : <BiDownArrow size='2rem' />
            }
         </Select>
         {
            (selectActive) &&
            <SelectOptions>
               {products.map(prod => (
                  <ProductOptionCard
                     key={prod.id}
                     product={prod}
                     activateProd={handleSetProductActive}
                     isActive={activeProduct.id === prod.id ? true : false}
                  />
               ))
               }
            </SelectOptions>
         }
         <Image src={require(`../assets/hamburger${img}.png`)} />
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
         <button onClick={addProductToCart}
            style={{
               width: '95%', padding: '1rem', margin: '2rem auto',
               backgroundColor: 'purple', color: 'white', fontWeight: 'bold', borderRadius: '6px'
            }}>
            Agregar al Carrito
         </button>
      </Container>
   )
}
