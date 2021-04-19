import React, { Component } from 'react';

// import { BASE_IMAGE_URL } from '../../servicesApi/movie-api';
import { fetchMovieByCast } from '../../servicesApi/movie-api';
class Cast extends Component {
  state = {
    cast: [],
    error: null,
  };

  componentDidUpdate() {
    // console.log('Cast componentDidMount() match: ', this.props.match);
    const { movieId } = this.props.match.params;
    // console.log('movieId: ', movieId);
    const resCastData = fetchMovieByCast(movieId);
    console.log('resCastData: ', resCastData);
    //   .catch(error =>
    //   console.log('error in fetching Cast'),
    // );

    this.setState({
      cast: resCastData,
    });
  }

  render() {
    const { cast } = this.state;
    const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w300/';

    return (
      <>
        <ul>
          {cast.map(({ name, character, profile_path, id }) => {
            return (
              <li key={id}>
                <img src={`${BASE_IMAGE_URL}${profile_path}`} alt={name} />
                <p>Name:{name}</p>
                <p>Character:{character}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Cast;
