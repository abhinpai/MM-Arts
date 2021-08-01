import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/Common.scss';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import Banner from './Pages/Banner';
import About from './Pages/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Gallery from './Pages/Gallery';
import Timings from './Pages/Timings';
import { AnimatePresence } from 'framer-motion';
import Header from './Components/Header';
import Offer from './Pages/Offer';
import MobileView from './Pages/MobileView';
import useCheckIsMobile from './utils/useCheckIsMobile';

const Views = () => {
  return useCheckIsMobile() ? (
    <MobileView />
  ) : (
    <Router>
      <Header />
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route exact path='/' component={Banner} />
              <Route exact path='/home' component={Banner} />
              <Route exact path='/about' component={About} />
              <Route exact path='/offer' component={Offer} />
              <Route exact path='/gallery' component={Gallery} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Views />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
