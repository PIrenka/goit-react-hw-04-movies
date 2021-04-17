import styles from './stylesMoviesItem.module.scss';

const MoviesItemHomePage = ({ movie }) => {
  console.log('movie from ITEM: ', movie);
  const BASE_URL = 'image.tmdb.org/t/p/w500';
  console.log(
    '${BASE_URL}movie.poster_path: ',
    `${BASE_URL}${movie.poster_path}`,
  );
  return (
    <div className={styles.moviesItem}>
      <img
        src="{`${BASE_URL}${movie.poster_path}`}"
        alt="movie.original_title"
      />
      <h2>Title: {movie.title}</h2>
      <p>User Score: {movie.vote_average}</p>
      <h3>Overview </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, totam
        accusantium ex explicabo tempore dolor.
        {movie.overview}
      </p>
      <p>Genres: {movie.genre_ids}</p>
    </div>
  );
};

export default MoviesItemHomePage;
