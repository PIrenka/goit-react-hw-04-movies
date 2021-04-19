import { Component } from 'react';

import { fetchMovieByReviews } from '../../servicesApi/movie-api';

class Reviews extends Component {
  state = {
    reviews: [],
  };
  componentDidMount() {
    console.log('Cast componentDidMount() match: ', this.props.match);
    const { movieId } = this.props.match.params;
    fetchMovieByReviews(movieId).then(results =>
      this.setState({
        reviews: results,
      }),
    );
  }

  render() {
    const { reviews } = this.state;
    return (
      <>
        <ul>
          {reviews.length > 0 ? (
            reviews.map(({ content, id }) => {
              return <p key={id}>{content}</p>;
            })
          ) : (
            <p>we don't have reviews</p>
          )}
        </ul>
      </>
    );
  }
}

export default Reviews;
