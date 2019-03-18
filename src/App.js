import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  addTrack = () => {
    console.log("Add track", this.trackInput.value);
    this.props.onAddTrack(this.trackInput.value);
    this.trackInput.value = "";
  };

  render() {
    let { testStore } = this.props;
    console.log(testStore);
    return (
      <div>
        <input
          type="text"
          ref={input => {
            this.trackInput = input;
          }}
        />
        <button onClick={this.addTrack}>Add track</button>
        {testStore.map((track, index) => (
          <li key={index}>{track}</li>
        ))}
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    onAddTrack: trackName => {
      dispatch({ type: "ADD_TRACK", payload: trackName });
    }
  })
)(App);
