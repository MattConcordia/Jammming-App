import React, { Component } from 'react';
import Search from '../Search/Search';
import Results from '../Results/Results';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

import './App.css';

Spotify.getAccessToken();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [],
      playlistName: "",
      playlistTracks: [],
      isRemoval: true
    }

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {

    let tracks = this.state.playlistTracks;
        if (tracks.find(t_obj => t_obj.id === track.id)) {
            return tracks;
          }
            tracks.push(track);

          this.setState({ playlistTracks: tracks })
    };


  removeTrack(track) {

    let tracks = this.state.playlistTracks;
    let playlistUpdate = tracks.filter(t_obj => t_obj.id !== track.id)

      this.setState({ playlistTracks: playlistUpdate })
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name})
  }

  savePlaylist() {
    let trackURI = this.state.playlistTracks;
    const uri = trackURI.map(obj => obj.uri);
    Spotify.savePlaylist(this.state.playlistName, uri);

    this.setState({
      searchResults: [],
      playlistName: "New Playlist",
      playlistTracks: []
    });
  }

  search(searchTerm) {
    Spotify.search(searchTerm)
      .then(tracks => this.setState({
        searchResults: tracks
      }));
  }

  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>

        <div className="App">
          <Search
            onSearch={this.search}/>

          <div className="App-playlist">
            <Results
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
              isRemoval={false}/>

            <Playlist
              onNameChange={this.updatePlaylistName}
              playlistTracks={this.state.playlistTracks}
              isRemoval={true}
              onRemove={this.removeTrack}
              onSave={this.savePlaylist}
              />
          </div>
        </div>
      </div>

    );
  }
}

export default App;
