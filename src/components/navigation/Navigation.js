import styled from 'styled-components';

import * as paths from '../../constants/paths';

import NavigationRoot from './NavigationRoot';
import NavigationList from './NavigationList';
import NavigationLogo from './NavigationLogo';
import NavigationItem from './NavigationItem';

import galleryIcon from '../../svg/gallery.svg';
import aboutIcon from '../../svg/about.svg';

function Navigation() {
  return (
    <NavigationRoot>
      <NavigationList>
        <NavigationLogo/>

        <NavigationItem icon={galleryIcon} label="Galeria" to={paths.GALLERY_PATH}/>

        <NavigationItem icon={aboutIcon} label="Strona" to={paths.ABOUT_PATH}/>
      </NavigationList>
    </NavigationRoot>
  );
}

export default Navigation;