import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';

interface Props {
   max: number;
   min: number;
   number: number;
   setNumber: (num: number) => void;
   callback?: (num: number) => void;
}
const Container = styled.div`
   display: grid;
   grid-template-columns: 30% 40% 30%;
   align-items: center;
   padding: .3rem;
   border: 1px solid grey;
   border-radius: 2px;
   color: white;
`;

const Button = styled.button`
   width: 100%;
   background: none;
   border: none;
   margin: 0;
   padding: .2rem 1rem;
   background-color: grey;
   display: flex;
   align-items: center;
`;
const Number = styled.span`
   font-size: 2rem;
   text-align: center;
   margin: 0;
   padding: 0;
`;

export const MoreLessButton = ({ max, min, number, setNumber, callback }: Props) => {

   const handleAdd = () => {
      if (number < max) {
         setNumber(number + 1);
         if (callback) {
            callback(number + 1);
         }
      }
   }
   const handleSubtract = () => {
      if (number > min) {
         setNumber(number - 1);
         if (callback) {
            callback(number - 1);
         }
      }
   }

   return (
      <Container>
         <Button onClick={handleSubtract}><AiOutlineMinus color='black' size='2.5rem' /></Button>
         <Number>{number}</Number>
         <Button onClick={handleAdd}><AiOutlinePlus color='black' size='2.5rem' /></Button>
      </Container>
   )
}
