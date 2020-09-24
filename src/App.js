import React, { Component } from 'react';
import Home from './Containers/Home/Home';
import AppLayout from './Components/AppLayout/AppLayout';
import {Switch, Route} from 'react-router-dom';
import Watch from './Components/Watch/Watch';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { youtubeLibraryLoaded } from './Store/Actions/Api';

require('dotenv').config();
const API_KEY = process.env.API_KEY

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppLayout>
          <Switch>
            <Route path='/watch' component={Watch}/>
            <Route path='/' component={Home}/>
          </Switch>
        </AppLayout>
      </div>
    );
  }
  componentDidMount() {
    this.loadYoutubeApi()
  }

  loadYoutubeApi() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";
  
    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.setApiKey(API_KEY);
        window.gapi.client.load('youtube', 'v3', () => {
          this.props.youtubeLibraryLoaded();
        })
      })
    }
    document.body.appendChild(script)
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({youtubeLibraryLoaded}, dispatch)
}


export default connect(null, mapDispatchToProps)(App)
