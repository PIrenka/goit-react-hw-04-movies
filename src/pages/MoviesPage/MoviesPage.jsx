import { Component } from 'react';
import Searchbar from '../../components/Searchbar';

class MoviesPage extends Component {
  state = {
    movies: [],
    searchQuery: '',
  };

  addMovies = query => {
    this.setState({
      searchQuery: query,
      movies: [],
      //   currentPage: 1,
      //   error: null,
    });
  };

  render() {
    const {
      showModal,
      images,
      isLoading,
      searchQuery,
      modalURL,
      error,
    } = this.state;

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
