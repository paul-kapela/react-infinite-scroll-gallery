import styled from 'styled-components';

import { SMALL_SCREEN_WIDTH } from '../../constants/layout';

const Main = styled.main`
  padding: 2rem;
  margin-left: 5em;

  @media only screen and (max-width: ${SMALL_SCREEN_WIDTH}) {
    margin: 0;
  }
`;

export default Main;