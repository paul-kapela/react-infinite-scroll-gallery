import styled from 'styled-components';

import { SMALL_SCREEN_WIDTH } from '../../constants/layout';

const NavigationList = styled.ul`
  padding: 0;
  margin: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;

  @media only screen and (max-width: ${SMALL_SCREEN_WIDTH}) {
    flex-direction: row;
  }
`;

export default NavigationList;