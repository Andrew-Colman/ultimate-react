import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loading from './Loading';

const Home = lazy(() => import('../pages/home'));
const DocsPage = lazy(() => import('../pages/docs'));
const NotFoundPage = lazy(() => import('../pages/not-found'));

export default function Routes() {
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

            {/* add routes here */}

            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}
