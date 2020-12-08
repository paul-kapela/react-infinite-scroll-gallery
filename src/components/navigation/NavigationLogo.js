import styled from 'styled-components';

import { GALLERY_PATH } from '../../constants/paths';
import { COLOR_SECONDARY, BACKGROUND_SECONDARY, BACKGROUND_TERTIARY, TRANSITION_SPEED, SMALL_SCREEN_WIDTH } from '../../constants/layout';

import NavigationRoot from './NavigationRoot';
import NavigationLink from './NavigationLink';
import NavigationLogoSvg from './NavigationLogoSvg';
import LogoText from './LogoText';

const Logo = styled.li`
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: 0.3ch;
  width: 100%;

  & svg {
    transform: rotate(0deg);
    transition: ${TRANSITION_SPEED};
  }

  ${NavigationRoot}:hover & svg {
    transform: rotate(-180deg);
  }

  @media only screen and (max-width: ${SMALL_SCREEN_WIDTH}) {
    display: none;
  }

  @media only screen and (min-width: ${SMALL_SCREEN_WIDTH}) {
    ${NavigationRoot}:hover & svg {
      margin-left: 12rem;
      filter: grayscale(0%);
    }

    ${NavigationRoot}:hover & ${NavigationLink} {
      filter: opacity(1);
      background-color: ${BACKGROUND_TERTIARY};
      color: ${COLOR_SECONDARY};
    }
  }
`;

function NavigationLogo() {
  return (
    <Logo>
      <NavigationLink to={GALLERY_PATH}>
          <LogoText>Galeria</LogoText>

          <NavigationLogoSvg/>
      </NavigationLink>
    </Logo>
  )
}

export default NavigationLogo;