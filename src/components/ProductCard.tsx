import styled from 'styled-components';
import { BorderDiv } from './layouts/BorderDiv';
import { BiDownArrow } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import { useContext, useEffect, useState } from 'react';
import { ProductOptionCard } from './OptionSelect';
import { MoreLessButton } from './layouts/MoreLessButton';
import { CartContext } from '../context/CartContext';
import { ProductActiveCard } from './layouts/ProductActiveCard';
import { getAllProducts, getExtrasPrice } from '../firebase/dbQueries';
import { Spinner } from './layouts/Spinner';

const Container = styled.div`
   width: 90%;
   max-width: 400px;
   margin: auto;
   padding: .5rem;
   border: 1px solid purple;
   color: #fff;
   text-align: center;
   position: relative;
   box-shadow: 1px 1px 12px purple;
`;

const Select = styled.div`
   font-size: 2.5rem;
   display: flex;
   align-items: center;
   justify-content: space-between;
   color: ${({ color }) => color};
   padding: 1rem 2rem;
   /*border-bottom: 1px solid  ${({ color }) => color};*/
   border-bottom: 1px solid purple;
   cursor: pointer;

   p{
      margin: 0;
      padding:0;
   }
`;


const SelectOptions = styled.div`
   max-height: 300px;
   overflow: auto;
`;

interface Product {
   name: string;
   ingredients: string;
   id: string;
   img: string;
   price: number;
}

export const ProductCard = () => {
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const [products, setProducts] = useState<Product[]>([]);
   const [selectActive, setSelectActive] = useState<boolean>(false);
   const [activeProduct, setActiveProduct] = useState<Product>();
   const { addItemToCart } = useContext(CartContext);

   useEffect(() => {
      getProductsFromDataBase();
   }, []);

   const getProductsFromDataBase = async () => {
      const resp = await getAllProducts();
      setProducts(resp);
      setActiveProduct(resp[0]);
      setIsLoading(false);
   }
   const handleSetProductActive = (id: string) => {
      const result = products.find(prod => prod.id === id);
      if (result) {
         setActiveProduct(result);
         setSelectActive(false);
      }
   }

   if (isLoading) {
      return (<Spinner/>)
   }
   return (
      <Container>
         <BorderDiv size={{ height: 40, width: 5 }} position={'right'} dif={{ x: 70, z: 5 }} />
         <BorderDiv size={{ height: 20, width: 5 }} position={'left'} />

         <Select color="white" onClick={() => setSelectActive(!selectActive)}>
            <p>Selecciona</p>
            {(selectActive) ? <IoMdClose size='2rem' />
               : <BiDownArrow size='2rem' />
            }
         </Select>
         {

            (selectActive && activeProduct) &&
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

         {
            (activeProduct) && 
            <ProductActiveCard
            product={activeProduct}
            addProdToCart={addItemToCart} />
         }

      </Container>
   )
}
