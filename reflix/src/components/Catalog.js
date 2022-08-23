import React, { Component } from "react";
import Movie from "./Movie";
import RentedMovies from "./RentedMovies";
class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      budget: 10,
    };
  }

  changeBudget = (num) => {
    this.setState({
      budget: this.state.budget + num,
    });
  };
  checkBudget = (rentedMovieId) => {
    // const rented = this.props.movies.find(
    //   (m) => m.id === rentedMovieId
    // ).isRented;
    // let budget = this.state.budget;
    // if (rented) {
    //   budget -= 3;
    // } else {
    //   budget += 3;
    // }
  };
  searchMovie = (e) => {
    this.props.searchMovie(e);
  };
  render() {
    return (
      <div className="catalog">
        <input
          type="text"
          placeholder="Search"
          value={this.props.searchInput}
          onChange={this.searchMovie}
        ></input>
        <p>budget : {this.state.budget}</p>
        {this.props.movies.find((m) => m.isRented === true) ? (
          <h2>Rented</h2>
        ) : (
          <h2></h2>
        )}
        <RentedMovies
          movies={this.props.movies}
          rentedMovie={this.props.rentedMovie}
          budget={this.state.budget}
          changeBudget={this.changeBudget}
        />

        <h3>Catalog: </h3>
        <div className="movieza">
          {" "}
          {this.props.movies.map((m) => {
            return (
              <Movie
                movie={m}
                rentedMovie={this.props.rentedMovie}
                budget={this.state.budget}
                changeBudget={this.changeBudget}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Catalog;
