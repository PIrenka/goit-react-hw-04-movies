import styles from './stylesMoviesItem.module.scss';
import { BASE_IMAGE_URL } from '../../servicesApi/movie-api';
import PropTypes from 'prop-types';

const MoviesItemHomePage = ({ movie }) => {
  const {
    poster_path,
    title,
    original_title,
    vote_average,
    id,
    release_date,
  } = movie;

  const imgURL = poster_path
    ? `${BASE_IMAGE_URL}${poster_path}`
    : 'https://upload.wikimedia.org/wikipedia/commons/6/64/Poster_not_available.jpg';

  return (
    <div className={styles.moviesItem}>
      <img src={`${imgURL}`} alt={`${id}-${title}`} />
      <h2 className={styles.moviesItem__title}> {original_title}</h2>
      <div className={styles.moviesItem__info}>
        <p>
          Score:
          <span className={styles.moviesItem__infoData}> {vote_average}</span>
        </p>
        <p className={styles.moviesItem__infoData}>{release_date}</p>
      </div>
    </div>
  );
};

MoviesItemHomePage.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }),
};

export default MoviesItemHomePage;
