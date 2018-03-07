import React, { Component } from 'react';


export default class Search extends Component {
  constructor(props) {
    super(props);

    this.handleTermChange = this.handleTermChange.bind(this);
    this.search = this.search.bind(this);
  }

  search(term) {
    this.props.onSearch(term);
  }

  handleTermChange(event) {
    this.search(event.target.value);
  }

  render() {
    return(
      <div className="SearchBar">

        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={this.handleTermChange}
          />
      </div>
    );
  }
}
