import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux'



class App extends Component {
  constructor(props){
    super(props)
  }


  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}

const mapStateToProps


export default connect(mapStateToProps, { }) (App);
