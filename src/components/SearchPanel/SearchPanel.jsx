import React, { Component } from 'react';
import './SearchPanel.css'

class SearchPanel extends Component {

  state = {
    inputValue: '',
  };

  changeInputValue = (evt) => {
    this.setState({
      inputValue: evt.target.value
    })
  };
  handleyKey = (evt) => {
    if (evt.key === 'Enter') {
      if (this.state.inputValue.length) {
        this.props.searchMovie(this.state.inputValue);
        this.props.onMovieName(this.state.inputValue)
      }
    }
  }

  submitBtn = () => {
    if (this.state.inputValue.length) {
      this.props.searchMovie(this.state.inputValue);
      this.props.onMovieName(this.state.inputValue)
    }
  }

  render() {
    return(
      <div className='searchPanel'>
      <input onKeyDown={this.handleyKey} type="search" onChange={this.changeInputValue} />
      <button onClick={this.submitBtn}>Поиск</button>
      </div>
    )
  }


}


export default SearchPanel;
