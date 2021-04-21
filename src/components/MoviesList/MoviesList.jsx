import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import MoviesItemHomePage from '../MoviesItemHomePage';

import styles from './stylesMoviesList.module.scss';

const MoviesList = ({ movies }) => {
  return (
    <ul className={styles.moviesList}>
      {movies.map(movie => {
        return (
          <li key={movie.id} className={styles.moviesItem}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
              }}
            >
              <MoviesItemHomePage movie={movie} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MoviesList;
