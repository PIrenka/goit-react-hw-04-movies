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

    media_type: '',
    time_window: null,
    error: null,
    isLoading: false,
  };

  async componentDidMount() {
    const { error } = this.state;
    // this.setState({ isLoading: true });
    const res = await fetchMoviesTrend()
      .catch(error => console.error())
      .finally(this.setState({ isLoading: false }));
    console.log('fetchMoviesTrend(): ', fetchMoviesTrend());
    console.log('fetchMoviesTrend: ', fetchMoviesTrend);
    console.log('res: ', res);
    console.log('error: ', error);
    this.setState({ isLoading: true });
    this.setState({ movies: res });

    // ===============================================
    // const res = await axios
    //   .get(
    //     'https://api.themoviedb.org/3/trending/movie/week?api_key=05735f479cb8263fb39295f8f94e0567',
    //   )
    //   .then(({ data }) => data.results);
    // console.log('res: ', res);
    // this.setState({ movies: res });
    // ===============================================
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
        <MovieListHomePage movies={movies} />
      </Container>
    );
  }
}

export default HomePage;
