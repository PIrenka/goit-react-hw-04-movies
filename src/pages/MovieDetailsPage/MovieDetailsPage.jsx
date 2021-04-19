// import MoviesItemHomePage from '../../components/MoviesItemHomePage';

import { Component, lazy, Suspense } from 'react';
import { fetchMovieById } from '../../servicesApi/movie-api';
import { NavLink, Route, Switch } from 'react-router-dom';
// import { BASE_IMAGE_URL } from '../../servicesApi/movie-api';
import Container from '../../components/Container/';
import styles from './stylesMovieDetailsPage.module.scss';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Cast = lazy(() =>
  import('../../components/Cast' /* webpackChunkName: "Cast component" */),
);
const Reviews = lazy(() =>
  import('../../components/Reviews' /* webpackChunkName: "Cast component" */),
);

class MovieDetailsPage extends Component {
  state = {
    movie_id: '',
    original_title: '',
    genres: [],
    vote_average: 0,
    popularity: null,

    poster_path: '',
    overview: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    await fetchMovieById(movieId)
      .then(movie => this.setState({ ...movie }))
      .catch(() => console.log('error in MovieDetailsPage'));
  }
  render() {
    const {
      id,
      original_title,
      genres,
      vote_average,
      poster_path,
      title,
      overview,
      backdrop_path,
    } = this.state;
    console.log('MovieDetailsPage this.props.match: ', this.props.match);
    console.log('MovieDetailsPage this.props: ', this.props);
    console.log(
      'MovieDetailsPage this.props.match.params: ',
      this.props.match.params,
    );
    // const { movieId } = this.props.match.params.movieId;
    // const { movieUrl } = this.props.match.url;
    // console.log('this.props.match: ', this.props.match);
    // console.log('movieId: ', movieId);
    // console.log('movieUrl: ', movieUrl);
    const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';
    return (
      <>
        {' '}
        <p className={styles.infoTitle}> Movie Details Page</p>
        <Container>
          {/* <MoviesItemHomePage movie={movie} /> */}
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
              <h3 className={styles.extraInfoTitle}>Aditional information</h3>
              <NavLink
                // to={`${this.props.match.url}/cast`}
                to={`${this.props.match.url}/cast/${this.props.match.params.movieId}`}
              >
                <p className={styles.extraInfoText}>Cast</p>
              </NavLink>
              <NavLink
                to={`${this.props.match.url}/reviews/${this.props.match.params.movieId}`}
              >
                <p className={styles.extraInfoText}>Reviews</p>
              </NavLink>
              <Suspense
                fallback={
                  <Loader
                    type="Grid"
                    color="#00BFFF"
                    height={80}
                    width={80}
                    timeout={1000}
                  />
                }
              >
                {/* <Suspense fallback={<p>Is loading....</p>}> */}
                <Switch>
                  <Route
                    path={`${this.props.match.url}/cast/:${id}`}
                    component={Cast}
                  />
                  <Route
                    path={`${this.props.match.url}/reviews/:movieId`}
                    component={Reviews}
                  />
                </Switch>
              </Suspense>
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default MovieDetailsPage;
