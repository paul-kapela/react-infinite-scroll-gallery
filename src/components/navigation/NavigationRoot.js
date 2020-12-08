import styled from 'styled-components';

import { BACKGROUND_SECONDARY, SMALL_SCREEN_WIDTH } from '../../constants/layout';

const NavigationRoot = styled.nav`
  position: fixed;
  background-color: ${BACKGROUND_SECONDARY};
  transition: width 600ms ease;
  overflow: hidden;
  z-index: 1;

  @media only screen and (max-width: ${SMALL_SCREEN_WIDTH}) {
    bottom: 0;
    width: 100vw;
    height: 5rem;
  }

  @media only screen and (min-width: ${SMALL_SCREEN_WIDTH}) {
    top: 0;
    width: 5rem;
    height: 100vh;

    &:hover {
      width: 16rem;
      backdrop-filter: brightness(1.10);
    }
  }
`;

export default NavigationRoot;