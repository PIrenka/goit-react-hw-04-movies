import styles from './stylesMoviesItem.module.scss';
import { BASE_IMAGE_URL } from '../../servicesApi/movie-api';

const MoviesItemHomePage = ({ movie }) => {
  const {
    poster_path,
    title,
    original_title,
    vote_average,
    id,
    release_date,
  } = movie;

  return (
    <div className={styles.moviesItem}>
      <img src={`${BASE_IMAGE_URL}${poster_path}`} alt={`${id}-${title}`} />
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

export default MoviesItemHomePage;
