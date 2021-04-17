import { Route, NavLink, Switch } from 'react-router-dom';
import styles from './App.module.scss';

import HomePage from '../../pages/HomePage';
import MoviesPage from '../../pages/MoviesPage';
import MovieDetailsPage from '../../pages/MovieDetailsPage';

const App = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className="NavLink"
            activeClassName="NavLink--active"
            // className={styles.baseColor}
            // activeClassName={styles.activeColor}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/movies"
            className="NavLink"
            activeClassName="NavLink--active"
            // className={styles.baseColor}
            // activeClassName={styles.activeColor}
          >
            Movies
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
      </Switch>
    </>
  );
};

export default App;
