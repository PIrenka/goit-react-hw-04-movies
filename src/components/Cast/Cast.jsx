import React, { Component } from 'react';

// import { BASE_IMAGE_URL } from '../../servicesApi/movie-api';
import { fetchMovieByCast } from '../../servicesApi/movie-api';
class Cast extends Component {
  state = {
    castA: [],
    error: false,
  };

  componentDidMount() {
    // console.log('Cast componentDidMount() match: ', this.props.match);
    const { castA } = this.state;

    const { movieId } = this.props.match.params;
    console.log('movieId: ', movieId);
    // const resCastData = fetchMovieByCast(movieId)
    fetchMovieByCast(movieId).then(results =>
      this.setState({ castA: results }),
    );
    // .catch(err => {
    //   console.log('error with fetching in Cast');
    //   return this.setState({ err: true });
    // });
    // console.log('resCastData: ', resCastData);
    console.log('castA: ', this.state);

    // this.setState({
    //   castArr: resCastData,
    // });
  }

  // render() {
  //   const { castArr, err } = this.state;
  //   const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w300/';

  // return (
  //   <ul>
  //     {/* {err ? (
  //       <li key={'errorCast'}>
  //         <p>oops we don't have info</p>
  //       </li>
  //     ) : ( */}
  //     {castArr.map(({ name, character, profile_path, id }) => (
  //       <li key={id}>
  //         <img
  //           src={`${BASE_IMAGE_URL}${profile_path}`}
  //           alt={name}
  //           width="100"
  //         />
  //         <p>Name:{name}</p>
  //         <p>Character:{character}</p>
  //       </li>
  //     ))}
  //   </ul>
  // );
  // }
  render() {
    const { castA } = this.state;
    return (
      <div>
        <ul>
          {castA.map(({ name, id, profile_path }) => {
            return (
              <li key={id}>
                <img
                  width="100"
                  src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  alt=""
                />
                <p>
                  Name: <span>{name}</span>
                </p>{' '}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Cast;
