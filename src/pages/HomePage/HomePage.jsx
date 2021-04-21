import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { fetchMoviesTrend } from '../../servicesApi/movie-api';

import Container from '../../components/Container';
import MoviesItemHomePage from '../../components/MoviesItemHomePage';

import styles from './stylesHomePage.module.scss';

class HomePage extends Component {
  state = {
    movies: [],
    // thisProps: '',
    err: false,
  };

  async componentDidMount() {
    const resTrends = fetchMoviesTrend()
      .then(moviesTrendData => this.setState({ movies: moviesTrendData }))
      .catch(err => {
        console.log('error with fetching of HomePage');
        console.error(err);
        return this.setState({ err: true });
      });
    // console.log('resTrends: ', resTrends);
    // console.log('fetching Movies Trends...');

    // const thisProps = this.props.match.url;
    // console.log('thisProps:', thisProps);
  }

  render() {
    const { movies } = this.state;

    return (
      <Container>
        <h1 className={styles.homePageTitle}>movies trends by last week</h1>

        <ul className={styles.moviesList}>
          {movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `/movies/${movie.id}`,
                  }}
                >
                  <MoviesItemHomePage movie={movie} />
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
