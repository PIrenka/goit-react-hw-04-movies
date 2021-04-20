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
    // history:[],
  };

  addMovies = query => {
    this.setState({
      searchQuery: query,
      movies: [],
      currentPage: 1,
      error: null,
      //  history.push({ ...location, search: `query=${query}` }),
    });
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log('prevState: ', prevState);
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
        // console.log('results: ', results);
        // this.setState({ isLoading: true });

        this.setState(prevState => ({
          movies: [...prevState.movies, ...results],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch(() => console.log('error in fetching MoviePage'))
      // .catch(error => {
      //   console.log('error: ', error);
      //   this.setState(prevState => ({ error: { error } }));
      // })
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { movies, isLoading, searchQuery } = this.state;
    console.log('MoviePage this.props: ', this.props);

    return (
      <div>
        {/* <Container> */}
        <h1>here you can find more movies, just put the request</h1>
        {/* </Container> */}
        <Searchbar onSubmit={this.addMovies} />
        <Container>
          {movies.length > 0 && <MovieListHomePage movies={movies} />}
          {/* </Container>
        <Container> */}
          {movies.length > 0 && (
            <Button onClick={this.fetchMovies} isLoading={isLoading} />
          )}
        </Container>
        <Container>
          {movies.length === 0 && searchQuery && <p>Smth went wrong</p>}
        </Container>
      </div>
    );
  }
}
export default MoviesPage;
