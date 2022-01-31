import React, { Component } from 'react';
import Movies from '../../Movies/Movies';
import Service from '../../../Services/Services'
import SearchPanel from '../../SearchPanel/SearchPanel';
import Spinner from '../../Spinner/Spinner'
import ErrorMes from '../../ErrorMes/ErrorMes';
import './Main.css'

class Main extends Component {

  Service = new Service()

  state = {
    movies: [],
    loading: false,
    error: false,
    searchTitle: 'Avengers'
  };

  componentDidMount() {
    this.setState({
      loading: true
    })
    this.Service.getAllMovies('Avengers')
      .then((data) => this.onMovieLaoded(data))
      .catch(this.onError)
  }

  onMovieName = (str) => {
    this.setState({searchTitle: str})
    console.log(str);
  }




  searchMovie = (str) => {
    this.setState({loading: true})
    this.Service.getAllMovies(str)
    .then((data) => this.onMovieLaoded(data))
    .catch(this.onError)
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false
    })
  }
  onMovieLaoded = (data) => {
    this.setState({
      movies: data.Search,
      loading: false
    })
  }



  render() {
    const {loading, error} = this.state
    const {onSelectedMovie} = this.props
    const content = !(loading || error) ? (<Movies searchTitle={this.state.searchTitle} movies={this.state.movies} onSelectedMovie={onSelectedMovie} />) : null
    const errorMessage = error ? <ErrorMes /> : null
    const spinner = loading ? <Spinner /> : null
    return(
      <div className='main'>
      <div className="container">
          <SearchPanel onMovieName={this.onMovieName} searchMovie={this.searchMovie}/>
          {content}
          {errorMessage}
          {spinner}
      </div>
      </div>
    )
  }
}


export default Main;