// const Home = () => {
//   return (
//     <div className="home">
//       <h1>Home page of HW 04 react</h1>
//       <p>put here elements and trending movies</p>
//     </div>
//   );
// };

// export default Home;
import React, { Component } from 'react';
import moviesApi from '../../servicesApi/movie-api';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

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
      <>
        <h1>Hello HW 04-movies</h1>
        <p>this is the start</p>
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              {/* <NavLink to={`${this.prors.url}/${movie.id}`}> */}
              {movie.title}
              {/* </NavLink> */}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
