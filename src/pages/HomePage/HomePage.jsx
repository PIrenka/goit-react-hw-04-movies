import React, { Component } from 'react';
// import moviesApi from '../../servicesApi/movie-api';
// import axios from 'axios';
// import { NavLink } from 'react-router-dom';
// import MovieDetailsPage from '../MovieDetailsPage';
import MovieListHomePage from '../../components/MoviesListHomePage';
import Container from '../../components/Container';
import { fetchMoviesTrend } from '../../servicesApi/movie-api';

import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class HomePage extends Component {
  state = {
    movies: [],
    // genres: [],
    // thisProps: '',
    error: null,
    isLoading: false,
  };

  async componentDidMount() {
    const { error, thisProps } = this.state;
    this.setState({ isLoading: true });
    const resTrends = await fetchMoviesTrend()
      .catch(error => console.error())
      .finally(this.setState({ isLoading: false }));
    console.log('res: ', resTrends);
    console.log('error: ', error);
    // this.setState({ isLoading: true });
    this.setState({ movies: resTrends });
    // this.setState({ thisProps: this.props.match.url });
    console.log('Home this.props.match.url is -', this.props.match.url);
    // console.log(' thisProps -', thisProps);
  }

  render() {
    const { movies, isLoading } = this.state;
    return (
      <Container>
        <h1>Hello HW 04-movies</h1>
        <p>movies trends by last week</p>
        {isLoading && (
          <Loader
            type="Grid"
            color="#00BFFF"
            height={80}
            width={80}
            timeout={1000}
          />
        )}
        <MovieListHomePage movies={movies} thisProps={this.props.match.url} />
      </Container>
    );
  }
}

export default HomePage;
