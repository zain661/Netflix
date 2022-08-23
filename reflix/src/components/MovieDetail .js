import React, { Component } from "react";

class MovieDetails extends Component {
  render() {
    console.log(this.props.match)
    const movieId = this.props.match.params.movieId;
    let movie = this.props.movies.find(m => m.id == movieId)
    console.log(movie);
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
