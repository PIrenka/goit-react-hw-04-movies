import { Component } from 'react';
import Searchbar from '../../components/Searchbar';
import { fetchMoviesByQuery } from '../../servicesApi/movie-api';
import MovieListHomePage from '../../components/MoviesListHomePage';
import Container from '../../components/Container';
import Button from '../../components/Button';

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: '',
    // error: null,
    currentPage: 1,
  };

  addMovies = query => {
    this.setState({
      searchQuery: query,
      movies: [],
      currentPage: 1,
      err: false,

      isLoading: false,
      //  history.push({ ...location, search: `query=${query}` }),
    });
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log(
    //   'this.props.location.pathname in MoviePage : ',
    //   this.props.location.pathname,
    // );

    if (prevState.searchQuery !== this.state.searchQuery) {
      console.log('fetching movies by search query...');
      this.fetchMovies();
    }
  }

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

        {movies.length > 0 && !err ? (
          <Container>
            <MovieListHomePage movies={movies} />
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
