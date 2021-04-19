import MoviesItemHomePage from '../MoviesItemHomePage';
import MovieDetailsPage from '../../pages/MovieDetailsPage';
import { Link } from 'react-router-dom';

import styles from './stylesMoviesList.module.scss';

const MoviesListHomePage = ({ movies, thisProps }) => {
  // console.log('Home this.props.match.url is -', this.props.match.url);

  return (
    <ul className={styles.moviesList}>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            {/* <Link to={`/movies/:${movie.id}`} component={MovieDetailsPage}> */}
            {/* <Link to={`${thisProps}/${movie.id}`}> */}
            <MoviesItemHomePage movie={movie} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesListHomePage;
