import React, { Component } from "react";
import Movie from "./Movie";

class RentedMovies extends Component {
  render() {
    return (
      <div className="RentedMovies">
        {this.props.movies.map((m) => {
          if (m.isRented) {
            return (
              <div className="movie-rented" key={m.id}>
                <Movie movie={m} rentedMovie={this.props.rentedMovie}
                changeBudget={this.props.changeBudget}/>
                {/* <img className="movie-img" src={m.img} /> */}
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default RentedMovies;
