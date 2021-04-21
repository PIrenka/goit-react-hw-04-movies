import React, { Component } from 'react';

import { fetchMovieByCast } from '../../servicesApi/movie-api';

import styles from './stylesCast.module.scss';
class Cast extends Component {
  state = {
    cast: [],
    error: false,
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    // console.log('movieId: ', movieId);
    // const resCastData = fetchMovieByCast(movieId)
    fetchMovieByCast(movieId)
      .then(results => this.setState({ cast: results }))
      .catch(err => {
        console.log('error with fetching in Cast');
        return this.setState({ err: true });
      });
    // console.log('resCastData: ', resCastData);
  }

  render() {
    const { cast, err } = this.state;
    const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

    return (
      <ul className={styles.castList}>
        {!err ? (
          cast.map(({ name, character, profile_path, id }) => (
            <li key={id} className={styles.castItem}>
              {profile_path && (
                <>
                  <img
                    src={`${BASE_IMAGE_URL}${profile_path}`}
                    alt={name}
                    width="100"
                  />
                  <p>Name: {name}</p>
                  <p>Character: {character}</p>
                </>
              )}
            </li>
          ))
        ) : (
          <li key={'errorCast'}>
            <p className={styles.error}>oops we don't have info</p>
          </li>
        )}
      </ul>
    );
  }
}

export default Cast;
