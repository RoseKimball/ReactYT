import React from 'react';
import HeaderNav from './Containers/HeaderNav/HeaderNav';
import SideBar from './Containers/SideBar/SideBar';
import Home from './Containers/Home/Home';

function App() {
  return (
    <div className="App">
      <HeaderNav/>
      <SideBar/>
      <Home />
    </div>
  );
};

export default App;
