import { BASE_IMAGE_URL } from '../../servicesApi/movie-api';
import styles from '../../pages/MovieDetailsPage/stylesMovieDetailsPage.module.scss';

import PropTypes from 'prop-types';

const MovieDetailsTemplate = ({ movie }) => {
  const {
    id,
    poster_path,
    title,
    original_title,
    overview,
    vote_average,
    genres,
  } = movie;
  return (
    <div className={styles.movieContainer}>
      <img
        src={`${BASE_IMAGE_URL}${poster_path}`}
        alt={`${id}-${title}`}
        className={styles.poster}
      />
      <div className={styles.infoContainer}>
        <h2> {original_title}</h2>
        <p>User Score: {vote_average}</p>
        <h3>Overview </h3>
        <p>{overview}</p>
        <p>Genres: </p>
        <ul className={styles.genres}>
          {genres.map(({ name }) => {
            return (
              <li key={id + name} className={styles.genresItem}>
                {name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

MovieDetailsTemplate.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      }).isRequired,
    ),
  }),
};

export default MovieDetailsTemplate;
