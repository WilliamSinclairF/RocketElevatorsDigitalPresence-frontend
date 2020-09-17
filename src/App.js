import React from 'react';
//common components
import Footer from './generic/Footer';
import TopHeader from './generic/TopHeader';
// pages
import IndexPage from './pages/Index';
import ResidentialPage from './pages/Residential';
import CommercialPage from './pages/Commercial';
import QuoteApp from './pages/Quote/QuoteApp';
//404
import NotFoundPage from './pages/404';
//css
import './assets/css/essentials.css';
import './assets/css/bootstrap.min.css';
import './assets/css/layout.css';
import './assets/css/header-1.css';
import './assets/css/blue.css';
import './assets/css/normalize.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <TopHeader />
        <Switch>
          <Route exact path='/' component={IndexPage} />

          <Route path='/404' component={NotFoundPage} />

          <Route exact path='/residential' component={ResidentialPage} />

          <Route exact path='/commercial' component={CommercialPage} />

          <Route exact path='/quote' component={QuoteApp} />

          <Redirect to='/404' />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
