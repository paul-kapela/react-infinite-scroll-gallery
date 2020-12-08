import styled from 'styled-components';

import NavigationLink from './NavigationLink';
import SvgImage from '../SvgImage';
import LinkText from './LinkText';

const NavigationElement = styled.li`
  width: 100%;
`;

function NavigationItem({ icon, label, to }) {
  
  return (
    <NavigationElement>
      <NavigationLink to={to}>
        <SvgImage src={icon}/>

        <LinkText>{label}</LinkText>
      </NavigationLink>
    </NavigationElement>
  )
}

export default NavigationItem;