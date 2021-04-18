import { Component } from 'react';
import Searchbar from '../../components/Searchbar';
import { fetchMoviesByQuery } from '../../servicesApi/movie-api';

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: '',
    error: null,
  };

  addMovies = query => {
    this.setState({
      searchQuery: query,
      movies: [],
      //   currentPage: 1,
      //   error: null,
    });
  };

  componentDidUpdate(prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      console.log('fetching movies by search query...');
      this.fetchMovies();
    }
  }

  fetchMovies = () => {
    const { searchQuery } = this.state;
    this.setState({ isLoading: true });

    if (searchQuery.length <= 2) {
      this.setState({ isLoading: false });
      return;
    }

    fetchMoviesByQuery({ searchQuery })
      .then(results => {
        console.log('results', results);
        this.setState(prevState => ({
          movies: [...prevState.movies, ...results],
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    // const { movies, isLoading, searchQuery } = this.state;

    return (
      <div>
        {/* <Container> */}
        <h1>here you can find more movies, just put the request</h1>
        {/* </Container> */}

        <Searchbar onSubmit={this.addMovies} />
      </div>
    );
  }
}
export default MoviesPage;
