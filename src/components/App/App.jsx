import { Route, Switch } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import NavMenu from '../NavMenu';

import styles from './App.module.scss';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

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

      {/* <Suspense fallback={<p>Is loading....</p>}> */}
      <Suspense
        fallback={
          <Loader
            type="ThreeDots"
            color="#aeaae7"
            height={80}
            width={80}
            timeout={1000}
          />
        }
      >
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
