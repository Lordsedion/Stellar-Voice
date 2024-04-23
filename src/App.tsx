import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/main/Main';
import  {Outlet} from 'react-router-dom'
import { Nav } from './components/main/nav/Nav';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Outlet/>
    </div>
  );
}

export default App;
