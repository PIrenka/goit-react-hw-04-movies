import { Component } from 'react';

import { fetchMovieByReviews } from '../../servicesApi/movie-api';

import styles from './stylesReviews.module.scss';
class Reviews extends Component {
  state = {
    reviews: [],
    err: false,
  };
  componentDidMount() {
    const { reviews } = this.state;
    const { movieId } = this.props.match.params;

    console.log('movieId: ', movieId);
    const resByReviews = fetchMovieByReviews(movieId)
      .then(results =>
        this.setState({
          reviews: results,
        }),
      )
      .catch(err => {
        console.log('error with fetching in Reviews');
        return this.setState({ err: true });
      });
    console.log('this.state: ', this.state);
    console.log('reviews: ', reviews);
    console.log('resByReviews: ', resByReviews);
  }

  render() {
    const { reviews, err } = this.state;
    return (
      <>
        <ul>
          {reviews.length === 0 || err ? (
            <li key={'errorReview'}>We don't have any review for this movie</li>
          ) : (
            reviews.map(({ content, id, author }) => {
              return (
                <li key={id}>
                  <p>Author: {author}</p>
                  <p className={styles.reviewText}>{content}</p>
                </li>
              );
            })
          )}
        </ul>
      </>
    );
  }
}

export default Reviews;
