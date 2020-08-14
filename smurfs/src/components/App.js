import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux'
import { getSmurfs } from '../store/actions/smurfActions'
import SmurfContainer from './SmurfContainer'
import Form from './Form'
import {Profile} from './Profile'
import { BrowserRouter as Router, Switch, Route , Link } from 'react-router-dom'


class App extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getSmurfs()
  }

  render() {
    // console.log(this.props) // returns default state

    return (
      <div className="App">
        <h1>Smurf</h1>
        <Router>
        <Link to="/profile">Profile</Link>
        <br/>
        <Link to="/">Village</Link>
          <Switch>
            <Route path='/profile'>
              <Profile />
            </Route>

            <Route path='/'>
              <Form />
              <SmurfContainer />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state
}


export default connect(mapStateToProps, { getSmurfs }) (App);
