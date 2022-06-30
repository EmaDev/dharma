import React, { useState } from 'react';
import styled from 'styled-components';
import { MoreLessButton } from './MoreLessButton';

const ExtrasContainer = styled.div`
   margin: 1rem;
   padding-top: 1rem;
   display: flex;
   justify-content: space-around;
   border-top: 1px solid ${({ color }) => color}; 
`;

interface Props {
    setState?: any;
}
export const Extras = ({ setState }: Props) => {

    const [chedarQuatity, setChedarQuantity] = useState<number>(0);
    const [meatQuatity, setMeatQuantity] = useState<number>(0);

    const setExtrasChedar = (num: number) => {
        setState({
            chedar: num,
            meat: meatQuatity
        })
    }
    const setExtrasMeat = (num: number) => {
        setState({
            chedar: chedarQuatity,
            meat: num
        })
    }
    return (
        <ExtrasContainer color='purple'>
            <div>
                <span> + Chedar</span>
                <MoreLessButton
                    min={0}
                    max={3}
                    number={chedarQuatity}
                    setNumber={setChedarQuantity}
                    callback={setExtrasChedar}
                />
            </div>
            <div>
                <span> + Carne</span>
                <MoreLessButton
                    min={0}
                    max={3}
                    number={meatQuatity}
                    setNumber={setMeatQuantity}
                    callback={setExtrasMeat}
                />
            </div>
        </ExtrasContainer>
    )
}
