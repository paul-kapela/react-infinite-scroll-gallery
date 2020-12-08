import { Switch, Route } from 'react-router-dom';

import * as paths from '../../constants/paths';

import Gallery from '../../pages/Gallery';
import About from '../../pages/About';
import NotFound from '../../pages/NotFound';

function Routes() {
  return (
    <Switch>
      <Route exact path={paths.GALLERY_PATH} component={Gallery}/>
      <Route path={paths.ABOUT_PATH} component={About}/>
      <Route component={NotFound}/>
    </Switch>
  );
}

export default Routes;