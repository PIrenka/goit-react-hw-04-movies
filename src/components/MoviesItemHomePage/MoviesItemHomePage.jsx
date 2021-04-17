import styles from './stylesMoviesItem.module.scss';

const MoviesItemHomePage = ({ movie }) => {
  const {
    poster_path,
    title,
    original_title,
    vote_average,
    overview,
    genre_ids,
    id,
  } = movie;
  // console.log('movie from ITEM: ', movie);
  // const BASE_URL = 'https://image.tmdb.org/t/p/original';
  const BASE_URL = 'https://image.tmdb.org/t/p/w500';
  return (
    <div className={styles.moviesItem}>
      <img src={`${BASE_URL}${poster_path}`} alt={`${id}-${original_title}`} />
      <h2> {title}</h2>
      <p>User Score: {vote_average}</p>
      <h3>Overview </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, totam
        accusantium ex explicabo tempore dolor.
        {overview}
      </p>
      <p>Genres: {genre_ids}</p>
    </div>
  );
};

export default MoviesItemHomePage;
