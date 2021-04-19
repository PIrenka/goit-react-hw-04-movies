// import MoviesItemHomePage from '../../components/MoviesItemHomePage';
// import { BASE_IMAGE_URL } from '../../servicesApi/movie-api';
// const MovieDetailsPage = ({ movie }) => {
//   const {
//     poster_path,
//     title,
//     original_title,
//     vote_average,
//     overview,
//     genre_ids,
//     genre,
//     id,
//   } = movie;
//   return (
//     <>
//       <h1> here you will see MovieDetailsPage</h1>
//       {/* <MoviesItemHomePage movie={movie} /> */}
//       <div>
//         <img
//           src={`${BASE_IMAGE_URL}${poster_path}`}
//           alt={`${id}-${original_title}`}
//         />
//         <h2> {title}</h2>
//         <p>User Score: {vote_average}</p>
//         <h3>Overview </h3>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, totam
//           accusantium ex explicabo tempore dolor.
//           {overview}
//         </p>
//         {/* <p>Genres: {genre_ids}</p> */}
//         {/* {genre.map(({ genre }) => {
//           return <p>Genres:{Object.values(genre)}</p>; */}
//         {/* })} */}
//       </div>
//     </>
//   );
// };
// export default MovieDetailsPage;

import { Component, lazy, Suspense } from 'react';
import { fetchMovieById } from '../../servicesApi/movie-api';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
const Cast = lazy(() =>
  import('../../components/Cast' /* webpackChunkName: "Cast component" */),
);
const Reviews = lazy(() =>
  import('../../components/Reviews' /* webpackChunkName: "Cast component" */),
);

class MovieDetailsPage extends Component {
  state = {
    movie_id: '',
    original_title: '',
    genres: [],
    vote_average: 0,
    popularity: null,
  };
  componentDidMount() {
    const { movieId } = this.props.match.params;
    fetchMovieById(movieId)
      .then(movie => this.setState({ ...movie }))
      .catch(console.error());
  }
  render() {
    const {
      id,
      original_title,
      genres,
      vote_average,
      poster_path,
      //     title,
      //     overview,
      //     genre_ids,
    } = this.state;
    // console.log('MovieDetailsPage this.props.match: ', this.props.match);
    return (
      //     <>
      // //       <h1> here you will see MovieDetailsPage</h1>
      // //       {/* <MoviesItemHomePage movie={movie} /> */}
      // //       <div>
      // //         <img
      //           src={`${BASE_IMAGE_URL}${poster_path}`}
      //           alt={`${id}-${title}`}
      //         />
      //         <h2> {origrnal_title}</h2>
      //         <p>User Score: {vote_average}</p>
      //         <h3>Overview </h3>
      //         <p>
      //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, totam
      //           accusantium ex explicabo tempore dolor.
      //           {overview}
      //         </p>
      //         {/* <p>Genres: {genre_ids}</p> */}
      //         {/* {genre.map(({ genre }) => {
      //           return <p>Genres:{Object.values(genre)}</p>; */}
      //         {/* })} */}
      //       </div>
      //     </>
      <>
        <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="" />
        <h2 key={id}>
          Title: <span> {original_title}</span>
        </h2>
        {genres.map(({ name }) => {
          return <p>Genres:{name}</p>;
        })}
        <p>User Score: {vote_average * 10}%</p>
        <p>Aditional information</p>
        <Link
          to={`${this.props.match.url}/cast/${this.props.match.params.movieId}`}
        >
          <p>Cast</p>
        </Link>{' '}
        <Link
          to={`${this.props.match.url}/reviews/${this.props.match.params.movieId}`}
        >
          <p>Reviews</p>
        </Link>{' '}
        <Suspense fallback={<p>Is loading....</p>}>
          <Switch>
            <Route
              path={`${this.props.match.url}/cast/:movieId`}
              component={Cast}
            />
            <Route
              path={`${this.props.match.url}/reviews:movieId`}
              component={Reviews}
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default MovieDetailsPage;
