import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
    product: {
        id: string;
        name: string;
        ingredients: string;
    };
    isActive: boolean;
    activateProd: (id: string) => void;
}

const ProductCard = styled.div<any>`
  padding: 1rem 2rem;
  background-color: ${({ color }) => color};
  border: 1px solid ${({ borCol }) => borCol};
`;

export const ProductOptionCard = ({ isActive, product, activateProd }: Props) => {

    const {id,name,ingredients} = product;

    return (
        <ProductCard
            borCol='white' color={(isActive) ? 'green' : 'transparent'}
            onClick={ () => activateProd(id)}
        >
            <p>{name}</p>
        </ProductCard>
    )
}
