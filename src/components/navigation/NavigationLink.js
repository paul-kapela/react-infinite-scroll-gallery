import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { COLOR_PRIMARY, COLOR_SECONDARY, BACKGROUND_PRIMARY, BACKGROUND_SECONDARY, TRANSITION_SPEED, SMALL_SCREEN_WIDTH, BACKGROUND_TERTIARY } from '../../constants/layout';

const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 5rem;
  color: ${COLOR_PRIMARY};
  background-color: ${BACKGROUND_SECONDARY};
  text-decoration: none;
  filter: opacity(0.7);
  transition: ${TRANSITION_SPEED};

  text-transform: uppercase;
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: 0.3ch;

  & svg, img {
    width: 2rem;
    min-width: 2rem;
    margin: 0 1.5rem;

    filter: grayscale(100%)
  }

  &:hover {
    filter: opacity(1);
    background-color: ${BACKGROUND_TERTIARY};
    color: ${COLOR_SECONDARY};
  }

  &:hover svg, img {
    filter: grayscale(0%);
  }

  @media only screen and (max-width: ${SMALL_SCREEN_WIDTH}) {
    justify-content: center;
  }
`;

export default NavigationLink;