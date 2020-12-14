import { Fragment } from 'react';
import styled, { keyframes } from 'styled-components';

const Rainbow = keyframes`
  0% { background-position: 0% 82% }
  50% { background-position: 100% 19% }
  100% { background-position: 0% 82% }
`;

const Svg = styled.svg`
  position: absolute;
  
  width: 0;
  height: 0;
`;

const RainbowIcon = styled.div`
  padding: 8em 10em;
  margin-bottom: 1em;
  display: inline-block;
  
  color: transparent;
  background: linear-gradient(124deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3);
  background-size: 1800% 1800%;

  clip-path: url('#galleryIcon');

  animation: ${Rainbow} 18s ease infinite;
`;

function RainbowGalleryIcon() {
  return (
    <Fragment>
      <RainbowIcon/>

      <Svg>
        <clipPath id="galleryIcon" clipPathUnits="objectBoundingBox">
          <path d="M0.833,0.857 V0.893 C0.833,0.952,0.796,1,0.75,1 H0.083 C0.037,1,0,0.952,0,0.893 V0.321 C0,0.262,0.037,0.214,0.083,0.214 H0.111 V0.679 C0.111,0.777,0.173,0.857,0.25,0.857 H0.833 M1,-0.429 V0.107 C1,0.048,0.963,0,0.917,0 H0.25 C0.204,0,0.167,0.048,0.167,0.107 V0.679 C0.167,0.738,0.204,0.786,0.25,0.786 H0.917 C0.963,0.786,1,0.738,1,0.679 M0.444,0.214 C0.444,0.273,0.407,0.321,0.361,0.321 S0.278,0.273,0.278,0.214 S0.315,0.107,0.361,0.107 S0.444,0.155,0.444,0.214 M0.278,0.536 L0.374,0.412 C0.382,0.401,0.395,0.401,0.404,0.412 L0.472,0.5 L0.707,0.198 C0.716,0.187,0.729,0.187,0.737,0.198 L0.889,0.393 V0.643 H0.278 V0.536">
          </path>
        </clipPath>
      </Svg>
    </Fragment>
  );
}

export default RainbowGalleryIcon;