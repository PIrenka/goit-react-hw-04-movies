import MoviesItemHomePage from '../MoviesItemHomePage';
import { Link } from 'react-router-dom';

import styles from './stylesMoviesList.module.scss';

const MoviesListHomePage = ({ movies }) => (
  <ul className={styles.moviesList}>
    {movies.map(movie => (
      <li key={movie.id}>
        <Link to={`/movies/${movie.id}`}>
          <MoviesItemHomePage movie={movie} />
        </Link>
      </li>
    ))}
  </ul>

  // <ul>
  //       {movies.map(movie => (
  //         <li key={movie.id}>
  //           {/* <NavLink to={`${this.prors.url}/${movie.id}`}> */}
  //           {movie.title}
  //           {/* </NavLink> */}
  //         </li>
  //       ))}
  //     </ul>
);

export default MoviesListHomePage;
