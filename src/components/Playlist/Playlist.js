import React, { Component } from 'react';
import Tracklist from '../Tracklist/Tracklist';


export default class Playlist extends Component {
  constructor(props) {
    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
}

  handleNameChange(event) {
    let val = event.target.value;
    this.props.onNameChange(val)
  }

  render() {
    return(
      <div className="Playlist">
        <input
          defaultValue={'New Playlist'}
          onChange={this.handleNameChange}
          />

        <Tracklist
          tracks={this.props.playlistTracks}
          onRemove={this.props.onRemove}
          isRemoval={this.props.isRemoval}/>

        <a
          className="Playlist-save"
          onClick={this.props.onSave}>

            SAVE TO SPOTIFY
        </a>
      </div>
    );
  }
}
