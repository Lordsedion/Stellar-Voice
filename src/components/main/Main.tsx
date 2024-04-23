import React from "react";
import './main.css';
import { MainView } from "./MainView";
import { Nav } from "./nav/Nav";
import MainViewDash from "./mainview_dash/MainViewDash";

function Main() {
  return (
    <div className="main">
      <div className="main-div-holder">
        <MainView/>
        <MainViewDash/>
      </div>
      
    </div>
  );
}

export default Main;
