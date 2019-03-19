import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  addTrack = () => {
    console.log("Add track", this.trackInput.value);
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = "";
  };

  findTrack() {
    console.log("findTrack", this.searchInput.value);
    this.props.onFindTrack(this.searchInput.value);
  }

  render() {
    console.log("this.props", this.props);
    return (
      <div>
        <div>
          <input
            type="text"
            ref={input => {
              this.trackInput = input;
            }}
          />
          <button onClick={this.addTrack}>Add track</button>
        </div>
        <div>
          <input
            type="text"
            ref={input => {
              this.searchInput = input;
            }}
          />
          <button onClick={this.findTrack.bind(this)}>Find track</button>
        </div>

        {this.props.tracks.map((track, index) => (
          <li key={index}>{track.name}</li>
        ))}
      </div>
    );
  }
}

export default connect(
  state => ({
    tracks: state.tracks.filter(track =>
      track.name.includes(state.filterTracks)
    )
  }),
  dispatch => ({
    onAddTrack: name => {
      const payload = {
        id: Date.now().toString(),
        name
      };
      dispatch({ type: "ADD_TRACK", payload });
    },
    onFindTrack: name => {
      dispatch({ type: "FIND_TRACK", payload: name });
    }
  })
)(App);
