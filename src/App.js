import { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

import { SMALL_SCREEN_WIDTH } from './constants/layout';

import './index.css';

import Main from './components/root/Main';
import Navigation from './components/navigation/Navigation';
import Routes from './components/root/Routes';

function App() {
  return (
    <Router>
      <Fragment>
        <Navigation/>
        
        <Main>
          <Routes/>
        </Main>
      </Fragment>
    </Router>
  );
}

export default App;
