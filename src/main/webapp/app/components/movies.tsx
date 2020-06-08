import React, {Component} from "react";
import {getMovies} from "app/services/fakeMovieService";
import get = Reflect.get;
import Like from "app/components/common/like";
import Pagination from "app/components/common/pagination";
import {paginate} from "app/util/paginate";


export default class Movies extends Component{

  state = {
    movies: getMovies(),
    pageSize: 4,
    currentPage: 1
  };

  handleDelete = movie => {
    const  movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handlePageChange = page => {
    this.setState({currentPage: page, hello: 1})
  };


  render() {

    const {length : count} = this.state.movies;
    const { pageSize, currentPage, movies : allMovies} = this.state;

    if(count === 0)
      return <p>There are no movies in the database.</p>;

    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <React.Fragment>
      <p>Showing {count} movies in the database</p>
      <table className="table m-2">
      <thead>
      <tr>
        <th>Title</th>
        <th>Genre</th>
        <th>Stock</th>
        <th>Rate</th>
        <th/>
        <th/>
      </tr>
      </thead>
      <tbody>
      {movies.map(movie => (
        <tr key={movie._id}>
          <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td><Like liked={true}/></td>
          <td>
            <button onClick={() => this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button>
          </td>
        </tr>
      ))}
      </tbody>
    </table>
        <Pagination itemsCount={count}
                    pageSize={pageSize}
                    onPageChange={this.handlePageChange}
                    currentPage={currentPage}/>
      </React.Fragment>
    )
  }



}
