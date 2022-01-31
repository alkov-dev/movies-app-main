import React, { Component } from 'react';
import Service from '../../../Services/Services'
import Spinner from '../../Spinner/Spinner';
import './Info.css'

class Info extends Component {

  Service = new Service()
  state = {
    poster: null,
    title: null,
    runtime: null,
    genre: null,
    year: null,
    released: null,
    country: null,
    rating: null,
    plot: null,
    loading: false
  }

  componentDidMount() {
    this.setState({loading: true})
    const id = this.props.selectedMovie
    this.Service.getMovie(id)
    .then(res => this.setState({
      poster: res.Poster,
      title: res.Title,
      runtime: res.Runtime,
      year: res.Year,
      released: res.Released,
      country: res.Country,
      rating: res.imdbRating,
      genre: res.Genre,
      plot: res.Plot,
      loading: false
    }));
  }



  render() {
    const { poster, title, runtime,year, released, country, rating, genre, plot, loading} = this.state
  return(
    <div className='info'>
    <div className="container info-container">
        {!loading ? (<div className='movie-box'><img src={poster} alt="" />
          <div className="movie-info">
            <h3>{title}</h3>
            <p>{country}/{year}/{runtime}/{released}/{rating} рейтинг</p>
            <h3>Жанр</h3>
            <p>{genre}</p>
            <h3>Сюжет</h3>
            <p>{plot}</p>
          </div></div> ) :
      <Spinner />
      }
    </div>
    </div>
  )
}
}

export default Info;
