import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { MainView } from './components/main/MainView';
import { Nav } from './components/main/nav/Nav';
import MainViewDash from './components/main/mainview_dash/MainViewDash';
import Main from './components/main/Main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='' element={<App/>}>
            <Route path='' element={<Main/>}/>
        </Route>
      </Routes>
    </Router>
    
  </React.StrictMode>
);


reportWebVitals();
