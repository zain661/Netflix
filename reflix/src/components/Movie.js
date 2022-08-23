import React, { Component } from "react";
import { Link } from "react-router-dom";

class Movie extends Component {
  rentedMovie = () => {
    if(this.props.movie.isRented===false){
        if(this.props.budget >3){
        this.props.rentedMovie(this.props.movie.id);
        this.props.changeBudget(-3)
    } 
    }else {
        this.props.rentedMovie(this.props.movie.id);
        this.props.changeBudget(3)
    }
   
  };
  checkBudget =() => {
    this.props.ch(this.props.movie.id)
  }
  render() {
    let movie = this.props.movie;
    return (
      <div key={movie.id} className="movie">
        <h2>{movie.title}</h2>
        <Link to={`/catalog/${movie.id}`}>
          <div className="movie-img">
            <img src={movie.img} />
          </div>
        </Link>
        {movie.isRented ?  <button onClick={this.rentedMovie}>-</button> :
        <button onClick={this.rentedMovie}>+</button>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              }
       
      </div>
    );
  }
}

export default Movie;
//(movie.isRented) ?
