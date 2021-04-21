import { Component } from 'react';
import Searchbar from '../../components/Searchbar';
import { fetchMoviesByQuery } from '../../servicesApi/movie-api';
import MovieList from '../../components/MoviesList';
import Container from '../../components/Container';
import Button from '../../components/Button';

import queryString from 'query-string';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: '',
    currentPage: 1,
    error: false,
    isLoading: false,
  };

  //==============================================
  componentDidMount() {
    const { search, pathname } = this.props.location;
    const { query } = queryString.parse(search);

    if (search && pathname) {
      this.setState({
        searchQuery: query,
      });
    }
  }
  //==============================================

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      console.log('fetching movies by search query...');
      this.fetchMovies();
    }
  }

  addMovies = query => {
    this.setState({
      searchQuery: query,
      movies: [],
      currentPage: 1,
      // err: false,

      // isLoading: false,
    });
  };

  fetchMovies = () => {
    const { searchQuery, currentPage } = this.state;
    this.setState({ isLoading: true });

    if (searchQuery.length <= 2) {
      this.setState({ isLoading: false });
      return;
    }

    fetchMoviesByQuery(searchQuery, currentPage)
      .then(results => {
        this.setState(prevState => ({
          movies: [...prevState.movies, ...results],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(err => {
        console.log('error in fetching MoviePage');
        return this.setState({ err: true });
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { movies, isLoading, searchQuery, err } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.addMovies} />
        {isLoading && (
          <Loader
            type="ThreeDots"
            color="#aeaae7"
            height={80}
            width={80}
            timeout={1000}
          />
        )}

        {movies.length > 0 && !err ? (
          <Container>
            <MovieList movies={movies} />
            <Button onClick={this.fetchMovies} isLoading={isLoading} />
          </Container>
        ) : (
          <Container>
            <h1>here you can find more movies, just put the request</h1>
          </Container>
        )}

        <Container>
          {movies.length === 0 && searchQuery && <p>Smth went wrong</p>}
        </Container>
      </div>
    );
  }
}
export default MoviesPage;
