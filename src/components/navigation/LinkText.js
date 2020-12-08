import styled from 'styled-components';

import { SMALL_SCREEN_WIDTH } from '../../constants/layout';

import NavigationRoot from './NavigationRoot';

const LinkText = styled.span`
  display: none;
  margin-left: 1rem;

  @media only screen and (min-width: ${SMALL_SCREEN_WIDTH}) {
    ${NavigationRoot} & {
      display: inline;
    }
  }
`;

export default LinkText;
