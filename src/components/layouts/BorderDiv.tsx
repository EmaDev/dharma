import React from 'react'
import styled from 'styled-components';

interface Props {
  size: { width: number; height: number };
  position: 'left' | 'right';
  bottom?: boolean;
  dif?: {
    x: number;
    z: number;
  }
}

const Border = styled.div<any>`
   position: absolute;
   height: ${({ h }) => `${h}px`};
   width: ${({ w }) => `${w}px`};
   background-color: orange; 
   ${({ pos }) => `${pos}: 5px`};
   ${({ bottom }) => `${bottom ? `bottom: 5px` : ''}`};
   margin: 0;
`;

export const BorderDiv = ({ position, size,bottom,dif}: Props) => {
  return (
    <>
      <Border bottom={bottom} h={size.height} w={size.width} pos={position} />
      {
        (dif) ? <Border bottom={bottom} h={dif.z} w={dif.x} pos={position} />
        :
        <Border bottom={bottom} h={size.width} w={size.height} pos={position} />
      }
    </>
  )
}
