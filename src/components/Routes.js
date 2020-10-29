import { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/*  code splitting is not working, needs bundler config 
const Home = lazy(() => import('@pages/home'));
const DocsPage = lazy(() => import('@pages/docs'));
const NotFoundPage = lazy(() => import('@pages/not-found'));
 */

import Home from '@pages/home';
import DocsPage from '@pages/docs';
import NotFoundPage from '@pages/not-found';
import Loading from './Loading';

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
