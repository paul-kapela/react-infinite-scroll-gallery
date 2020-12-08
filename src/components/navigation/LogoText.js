import styled from 'styled-components';

import { TRANSITION_SPEED } from '../../constants/layout';

import NavigationRoot from './NavigationRoot';
import LinkText from './LinkText';

const LogoText = styled(LinkText)`
  display: inline;
  position: absolute;
  left: -999px;
  transition: ${TRANSITION_SPEED};

  ${NavigationRoot}:hover & {
    left: 0px;
  }
`;

export default LogoText;