import React, { Component } from 'react';
import MoviesItemHomePage from '../../components/MoviesItemHomePage';
import Container from '../../components/Container';
import { fetchMoviesTrend } from '../../servicesApi/movie-api';
import { Link } from 'react-router-dom';
import styles from '../../components/MoviesListHomePage/stylesMoviesList.module.scss';
import stylesItem from '../../components/MoviesItemHomePage/stylesMoviesItem.module.scss';
import { BASE_IMAGE_URL } from '../../servicesApi/movie-api';

// import Loader from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class HomePage extends Component {
  state = {
    movies: [],
    // genres: [],
    thisProps: '',
    error: null,
    // isLoading: false,
  };

  async componentDidMount() {
    // const { error, thisProps } = this.state;
    // this.setState({ isLoading: true });
    const resTrends = await fetchMoviesTrend().catch(error =>
      console.log('error in fetch HomePage: ', error),
    );
    // .finally(this.setState({ isLoading: false }));
    // console.log('resTrends: ', resTrends);
    // this.setState({ isLoading: true });
    this.setState({ movies: resTrends });
    // this.setState({ thisProps: this.props.match.url });
    // console.log('Home this.props.match.url is -', this.props.match.url);
    // console.log(' thisProps -', thisProps);
  }

  render() {
    const { movies } = this.state;
    // console.log('Home this.props.match.url is -', this.props.match.url);
    // const { propsUrl } = this.props.match.url;
    // console.log('this.props.location: ', this.props.location);
    // console.log('this.props: ', this.props);
    return (
      <Container>
        <h1>movies trends by last week</h1>
        {/* {isLoading && (
          <Loader
            type="Grid"
            color="#00BFFF"
            height={80}
            width={80}
            timeout={1000}
          />
        )} */}
        {/* <MovieListHomePage movies={movies} thisProps={this.props.match.url} /> */}
        <ul className={styles.moviesList}>
          {movies.map(movie => {
            // console.log('movie: ', movie);
            return (
              <li key={movie.id} className={stylesItem.moviesItem}>
                {/* <Link to={`/movies/${movie.id}`}> */}
                {/* <Link to={`${thisProps}/${movie.id}`}> */}
                <Link
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: {
                      from: this.props.location,
                      search: `${this.props.query}`,
                    },
                  }}
                >
                  {/* <MoviesItemHomePage movie={movie} /> */}
                  <img
                    src={`${BASE_IMAGE_URL}${movie.poster_path}`}
                    alt={`${movie.id}-${movie.original_title}`}
                  />
                  <h2> {movie.title}</h2>
                  <p>User Score: {movie.vote_average}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    );
  }
}

export default HomePage;
