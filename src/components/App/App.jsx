import { Route, NavLink, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import NavMenu from '../NavMenu';

import styles from './App.module.scss';

const HomePage = lazy(() => import('../../pages/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));

const App = () => {
  return (
    <div className={styles.App}>
      <header className={styles.header}>
        <NavMenu />
      </header>

      <Suspense fallback={<p>Is loading....</p>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/movies" component={MoviesPage} />
          <Route path="/movies/:movieId" component={MovieDetailsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default App;
