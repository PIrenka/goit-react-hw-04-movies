import React, { Component } from 'react';
import moviesApi from '../../servicesApi/movie-api';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import MovieDetailsPage from '../MovieDetailsPage';
import MovieListHomePage from '../../components/MoviesListHomePage';
import Container from '../../components/Container';

class HomePage extends Component {
  state = {
    movies: [],

    media_type: '',
    time_window: null,
  };

  async componentDidMount() {
    // const { media_type, time_window } = this.state;
    // const res = await moviesApi.fetchMovies;
    const res = await axios
      .get(
        'https://api.themoviedb.org/3/trending/movie/week?api_key=05735f479cb8263fb39295f8f94e0567',
      )
      .then(({ data }) => data.results);

    console.log('res: ', res);
    this.setState({ movies: res });
  }

  render() {
    const { movies } = this.state;
    return (
      <Container>
        <h1>Hello HW 04-movies</h1>
        <p>movies trends by last week</p>
        <MovieListHomePage movies={movies} />
      </Container>
    );
  }
}

export default HomePage;
