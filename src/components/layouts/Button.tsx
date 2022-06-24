import styled from 'styled-components';

const Btn = styled.button`
   width: 100%;
   margin: 1rem 0;
   padding: 1rem;
   background-color: purple;
   font-size: 1.6rem;
   font-weight: bold;
   color: white;
   border-radius: 6px;
`;
interface Props{
    text:string;
}

export const Button = ({text}:Props) => {
  return (
    <Btn>
        {text}
    </Btn>
  )
}
