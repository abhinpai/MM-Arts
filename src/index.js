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
import Header from './Pages/Header';
import Offer from './Pages/Offer';

ReactDOM.render(
  <React.StrictMode>
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
              <Route exact path='/timings' component={Timings} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
