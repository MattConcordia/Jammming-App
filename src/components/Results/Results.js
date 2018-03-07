import React, { Component } from 'react';
import Tracklist from '../Tracklist/Tracklist';


export default class Results extends Component {
  render() {
    return(
      <div className="SearchResults">
        <h2>Results</h2>
          <Tracklist tracks={this.props.searchResults} onAdd={this.props.onAdd} isRemoval={this.props.isRemoval}/>
      </div>
    );
  }
}
