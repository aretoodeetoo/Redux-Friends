import React, { Component } from 'react';
import { Route } from 'react-router';

import './App.css';

// import views
import FriendsListView from './views/FriendsListView';
import FormView from './views/FormView';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route path="/" component={FriendsListView} />
      <Route path="/" render={props => (
        <FormView 
        {...props}
        /> 
        )} />
      </div>
    );
  }
}

export default App;
