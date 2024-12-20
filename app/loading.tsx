'use client';

import styled, { keyframes, css } from 'styled-components';

export default function Loading() {
  return (
    <div className='flex-center size-full bg-black h-screen gap-3 text-white'>
      <Loadingdiv />
    </div>
  );
}
const scrollX = keyframes`
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
`;
const Loadingdiv = styled.div`
  &:after {
    content: ' ';
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid currentColor;
    border-color: currentColor transparent currentColor transparent;
    animation: ${scrollX} 1.2s infinite;
  }

  color: #ffffff;
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;
