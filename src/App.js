import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loading from './components/Loading';
import { ContextProvider } from './components/Context';
import GlobalStyle from './GlobalStyle';

require('dotenv').config();

const Home = lazy(() => import('./pages/home'));
const DocsPage = lazy(() => import('./pages/docs'));
const NotFoundPage = lazy(() => import('./pages/not-found'));

export default function App() {
  return (
    <>
      <ContextProvider>
        <GlobalStyle />
        <Router>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/docs">
                <DocsPage />
              </Route>
              <Route path="*">
                <NotFoundPage />
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </ContextProvider>
    </>
  );
}
