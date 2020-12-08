import { useState, useRef } from 'react';
import styled from 'styled-components';

import useIntersectionObserver from '../hooks/useIntersectionObserver';

import { SMALL_SCREEN_WIDTH } from '../constants/layout';

import Images from './Images';

const ImageRoot = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;

  display: inline-block;
  overflow: hidden;

  border-radius: 0.25rem;
  background-color: orange;

  transition: opacity 300ms, filter 200ms;

  & h2 {
    margin: 0;
    text-align: center;
    transition: color 300ms;
  }

  &:hover {
    & h2 {
      color: white;
    }
  }

  &:not(:hover) {
    filter: brightness(0.95);
  }

  @media only screen and (max-width: ${SMALL_SCREEN_WIDTH}) {  
    &:last-child {
      margin-bottom: calc(2rem + 3rem);
    }
  }
`;

const Img = styled.img`
  width: 100%;

  border-radius: 0.25rem;
`;

const Link = styled.a`
  z-index: 1;

  color: inherit;
  text-decoration: none;
`;

function Image({ image, onVisible }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useIntersectionObserver({
    target: ref,
    onIntersect: ([{ isIntersecting }], observerElement) => {
      if (isIntersecting) {
        if (!isVisible) {
          onVisible();
          setIsVisible(true);
        }

        observerElement.unobserve(ref.current);
      }
    }
  });

  const { url, download_url } = image;

  return (
    <ImageRoot ref={ref} style={{ opacity: isLoaded ? '1' : '0' }}>
      { isVisible && (
        <Link href={url}>
          <Img src={download_url} alt="" onLoad={() => setIsLoaded(true)}/>

          <h2>{image.author}</h2>
        </Link>
      )}
    </ImageRoot>
  );
}

export default Image;