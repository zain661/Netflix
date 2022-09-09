import React, { Component } from "react";

class MovieDetails extends Component {
  render() {
    let movie = this.props.movie
    return (
      <div className="movie-detail">
        <h1>
          {movie.title} ({movie.year})
        </h1>
        <img src={movie.img} />
        <p>{movie.descrShort}</p>
      </div>
    );
  }
}

export default MovieDetails;
