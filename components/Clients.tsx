'use client';

import React from 'react';

import { companies, logo } from '@/data';

const Clients = () => {
  return (
    <section id='testimonials' className='pb-20 lg:pb-32 xl:pb-36'>
      <AppContainer>
        <Wrapper>
          <Note>Trusted partners by Industrial Leaders.</Note>
          <Marquee>
            <MarqueeGroup>
              {companies.map((el) => (
                <ImageGroup key={el.id}>
                  <Image
                    src={el.img}
                    className='w-full user-select-none pointer-events-none grayscale'
                  />
                </ImageGroup>
              ))}
            </MarqueeGroup>
            <MarqueeGroup>
              {logo.map((el) => (
                <ImageGroup key={el.id}>
                  <Image
                    src={el.img1}
                    className='w-full user-select-none pointer-events-none grayscale'
                  />
                </ImageGroup>
              ))}
            </MarqueeGroup>
          </Marquee>
        </Wrapper>
      </AppContainer>
    </section>
  );
};

export default Clients;
import styled, { keyframes, css } from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #adaeaf;
  text-align: left;
`;

const Marquee = styled.div`
  display: flex;
  width: 1200px;
  overflow: hidden;
  user-select: none;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 25s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
  object-fit: contain;
  /* width: 100%;
  height: 100%; */
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
`;
