import React from 'react';
import Home from './Containers/Home/Home';
import AppLayout from './Components/AppLayout/AppLayout';
import {Switch, Route} from 'react-router-dom';
import Watch from './Components/Watch/Watch';

function App() {
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
};

export default App;
