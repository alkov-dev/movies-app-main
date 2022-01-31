import React, { Component } from 'react';
import {Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Info from './components/Pages/Info/Info';
import Main from './components/Pages/Main/Main';
import Saved from './components/Pages/Saved/Saved';

class App extends Component {

  state = {
    selectedMovie: null
  }


  onSelectedMovie = (id) => {
    this.setState({selectedMovie: id})
  }


  render() {
  return (
      <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={() => <Main onSelectedMovie={this.onSelectedMovie}  />} />
          <Route path='/info/:filmID' component={() => <Info selectedMovie={this.state.selectedMovie} />} />
          <Route path='/saved' component={Saved} />
        </Switch>
      </div>
    </BrowserRouter>
  )
  }
}

export default App;
