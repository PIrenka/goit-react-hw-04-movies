// import MoviesItemHomePage from '../../components/MoviesItemHomePage';

import { Component, lazy, Suspense } from 'react';
import { fetchMovieById } from '../../servicesApi/movie-api';
import { NavLink, Link, Route, Switch } from 'react-router-dom';
// import { BASE_IMAGE_URL } from '../../servicesApi/movie-api';
import Container from '../../components/Container/';
import styles from './stylesMovieDetailsPage.module.scss';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Cast = lazy(() => import('../../components/Cast'));
const Reviews = lazy(() => import('../../components/Reviews'));

class MovieDetailsPage extends Component {
  state = {
    movie_id: '',
    original_title: '',
    genres: [],
    vote_average: 0,
    title: '',

    poster_path: '',
    overview: '',

    err: false,
    location: null,
  };

  componentDidMount() {
    this.setState({ location: this.props.location });
    const { movieId } = this.props.match.params;
    fetchMovieById(movieId)
      .then(movieData => this.setState({ ...movieData }))
      .catch(err => {
        console.log('error in MovieDetailsPage');
        return this.setState({ err: true });
      });
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push('/');
  };

  render() {
    const {
      id,
      original_title,
      genres,
      vote_average,
      poster_path,
      title,
      overview,
      err,
    } = this.state;

    console.log('fetching Movie by Id...');

    const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';
    return (
      <>
        <p className={styles.infoTitle}> Movie Details Page</p>
        <Container>
          <button type="button" onClick={this.handleGoBack}>
            Go back
          </button>

          {err ? (
            <h1>OOOOPPPPSSSS THERE IS AN ERROR!!!!!!!!!!!!!!!!</h1>
          ) : (
            // {/* <MoviesItemHomePage movie={movie} /> */}
            <>
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
              <div>
                <h3 className={styles.extraInfoTitle}>Aditional information</h3>
                <NavLink to={`${this.props.match.url}/cast/${id}`}>
                  <p className={styles.extraInfoText}>Cast</p>
                </NavLink>
                <NavLink to={`${this.props.match.url}/reviews/${id}`}>
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
                  <Switch>
                    <Route
                      path={`${this.props.match.url}/cast/:movieId`}
                      component={Cast}
                    />
                    <Route
                      path={`${this.props.match.url}/reviews/:movieId`}
                      component={Reviews}
                    />
                  </Switch>
                </Suspense>
              </div>
            </>
          )}
        </Container>
      </>
    );
  }
}

export default MovieDetailsPage;
