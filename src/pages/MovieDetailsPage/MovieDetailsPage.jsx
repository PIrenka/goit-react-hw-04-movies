import { Component, lazy, Suspense } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';

import { fetchMovieById } from '../../servicesApi/movie-api';

import Container from '../../components/Container/';
import MovieDetailsTemplate from '../../components/MovieDetailsTemplate';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import styles from './stylesMovieDetailsPage.module.scss';

const Cast = lazy(() => import('../../components/Cast'));
const Reviews = lazy(() => import('../../components/Reviews'));

class MovieDetailsPage extends Component {
  state = {
    movie_id: '',
    err: false,
    location: null,

    original_title: '',
    genres: [],
    vote_average: 0,
    title: '',
    poster_path: '',
    overview: '',
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

    // console.log('fetching Movie Details Info page...');
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    // if (location.state && location.state.from) {
    //   return history.push(location.state.from);
    // }
    // history.push('/');
    //=================================================
    history.push(location?.state?.from || '/');
    //=================================================
  };

  render() {
    const { id, err } = this.state;

    return (
      <>
        <p className={styles.infoTitle}> Movie Details Page</p>
        <Container>
          <button
            type="button"
            onClick={this.handleGoBack}
            className={styles.btnGoBack}
          >
            Go back
          </button>

          {err ? (
            <h1 className={styles.errorText}>
              OOOOPPPPSSSS THERE IS AN ERROR!!!!!!!!!!!!!!!!
            </h1>
          ) : (
            <>
              <MovieDetailsTemplate movie={{ ...this.state }} />

              <div className={styles.extraInfoContainer}>
                <h3 className={styles.extraInfoTitle}>Aditional information</h3>
                <div className={styles.extraInfo}>
                  <NavLink
                    to={`${this.props.match.url}/cast/${id}`}
                    className={styles.navLink}
                    activeClassName={styles.navLink__active}
                  >
                    <p className={styles.extraInfoText}>Cast</p>
                  </NavLink>
                  <NavLink
                    to={`${this.props.match.url}/reviews/${id}`}
                    className={styles.navLink}
                    activeClassName={styles.navLink__active}
                  >
                    <p className={styles.extraInfoText}>Reviews</p>
                  </NavLink>
                </div>
                <Suspense
                  fallback={
                    <Loader
                      type="ThreeDots"
                      color="#aeaae7"
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
