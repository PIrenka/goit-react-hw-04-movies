import MoviesItemHomePage from '../MoviesItemHomePage';
// import MovieDetailsPage from '../../pages/MovieDetailsPage';
import { Link } from 'react-router-dom';

import styles from './stylesMoviesList.module.scss';

const MoviesListHomePage = ({ movies }) => {
  // const { id } = movies;
  return (
    <ul className={styles.moviesList}>
      {movies.map(movie => {
        return (
          <li key={movies.id} className={styles.moviesItem}>
            <Link
              to={{
                pathname: `/movies/${movies.id}`,
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

export default MoviesListHomePage;
