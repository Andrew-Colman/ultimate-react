import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loading from './components/Loading';

const Home = lazy(() => import('./pages/home'));
const DocsPage = lazy(() => import('./pages/docs'));

export default function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/docs">
              <DocsPage />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}