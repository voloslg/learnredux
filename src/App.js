import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  addTrack = () => {
    console.log("Add track", this.trackInput.value);
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = "";
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <input
          type="text"
          ref={input => {
            this.trackInput = input;
          }}
        />
        <button onClick={this.addTrack}>Add track</button>
        {this.props.tracks.map((track, index) => (
          <li key={index}>{track}</li>
        ))}
      </div>
    );
  }
}

export default connect(
  state => ({
    tracks: state.tracks
  }),
  dispatch => ({
    onAddTrack: trackName => {
      dispatch({ type: "ADD_TRACK", payload: trackName });
    }
  })
)(App);
