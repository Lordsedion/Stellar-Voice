import React from "react";
import './main.css';
import { MainView } from "./MainView";
import { Nav } from "./nav/Nav";
import MainViewDash from "./mainview_dash/MainViewDash";
import { useState, useContext, createContext } from "react";

export const GlobalContext = createContext<GlobalType | undefined>(undefined)

export type GlobalType = {
  currentTime: number
  duration: number
  pause: boolean

  setCurrentTime: (value:number)=>void
  setDuration: (value:number)=>void
  setPause: (value:boolean)=>void
}

function Main() {
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [pause, setPause] = useState(false)
  return (
    <GlobalContext.Provider value={{currentTime, duration, pause, setCurrentTime, setDuration, setPause}}>
      <div className="main">
      <div className="main-div-holder">
        <MainView/>
        <MainViewDash/>
      </div>
      
    </div>
    </GlobalContext.Provider>
    
  );
}

export default Main;
