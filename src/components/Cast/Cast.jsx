import { Component } from 'react';

import { fetchMovieByCast } from '../../servicesApi/movie-api';

class Cast extends Component {
  state = {
    castA: [],
  };
  componentDidMount() {
    console.log('Cast componentDidMount() match: ', this.props.match);
    const { movieId } = this.props.match.params;
    fetchMovieByCast(movieId).then(cast =>
      this.setState({
        castA: cast,
      }),
    );
  }

  render() {
    const { castA } = this.state;
    return (
      <>
        <ul>
          {castA.map(({ name, id }) => {
            return (
              <li key={id}>
                <p>Name:{name}</p>{' '}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Cast;
