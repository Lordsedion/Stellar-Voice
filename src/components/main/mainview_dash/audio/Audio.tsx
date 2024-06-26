import React, { useContext, useEffect, useState } from 'react';
import './audio.css';
import default_audio from "../../../../assets/audio/audio.mp3";
import { FaPlayCircle, FaPauseCircle } from "react-icons/fa";
import { GrBackTen, GrForwardTen } from "react-icons/gr";
import { HiDownload } from "react-icons/hi";
import { SlArrowDown } from "react-icons/sl";
import { GlobalContext } from '../../Main';

let p = 0;

const AudioBar = () => {
  const useCont = useContext(GlobalContext)
  const currentTime = useCont!.currentTime
  const duration = useCont!.duration
  const pause = useCont!.pause
  const setCurrentTime = useCont!.setCurrentTime
  const setDuration = useCont!.setDuration
  const setPause = useCont!.setPause

  useEffect(() => {
    const audioElement = document.getElementById("audio-001") as HTMLAudioElement;
    if (audioElement) {
      audioElement.addEventListener("timeupdate", handleTimeUpdate);
      audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);
      audioElement.addEventListener("ended", handleAudioEnd);
      return () => {
        audioElement.removeEventListener("timeupdate", handleTimeUpdate);
        audioElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audioElement.removeEventListener("ended", handleAudioEnd);
      };
    }
  }, []);

  const handleTimeUpdate = () => {
    const audioElement = document.getElementById("audio-001") as HTMLAudioElement;
    if (audioElement) {
      setCurrentTime(audioElement.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    const audioElement = document.getElementById("audio-001") as HTMLAudioElement;
    if (audioElement) {
      setDuration(audioElement.duration);
    }
  };

  const handleChange = (e: any) => {
    const val = e.target.value;
    setCurrentTime(val);
    const audioElement = document.getElementById("audio-001") as HTMLAudioElement;
    if (audioElement) {
      audioElement.currentTime = val;
    }
  };

  const handlePause = () => {
    setPause(!pause);
    const audioElement = document.getElementById("audio-001") as HTMLAudioElement;
    if (audioElement) {
      if (!pause) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
      setCurrentTime(audioElement.currentTime);
    }
  };

  const handleBackward = () => {
    const audioElement = document.getElementById("audio-001") as HTMLAudioElement;
    if (audioElement) {
      audioElement.currentTime = Math.max(0, audioElement.currentTime - 10);
      setCurrentTime(audioElement.currentTime);
    }
  };

  const handleForward = () => {
    const audioElement = document.getElementById("audio-001") as HTMLAudioElement;
    if (audioElement) {
      audioElement.currentTime = Math.min(audioElement.duration, audioElement.currentTime + 10);
      setCurrentTime(audioElement.currentTime);
    }
  };

  const handleAudioEnd = () => {
    setPause(false);
    setCurrentTime(0);
  };

  return (
    <div className="audio-bel-1" id='audio-bel-1'>
      <audio src={default_audio} controls={true} autoPlay={false} id='audio-001'></audio>
      <div className="main-audio-con">
        <div className="play-icon" onClick={handlePause}>
          <small onClick={handleBackward}><GrBackTen /></small>
          {pause ? <span><FaPauseCircle /></span> : <span><FaPlayCircle /></span>}
          <small onClick={handleForward}><GrForwardTen /></small>
        </div>
        <div className="main-length">
          <div className="main-aud-title">Hello Barry</div>
          <div className="audio-more-1">
            <div className="for-back-1">
              <span onClick={handleBackward}><GrBackTen /></span>
              <span onClick={handleForward}><GrForwardTen /></span>
            </div>
            <input type="range" id="audio-range" max={duration} className='range-audio' value={currentTime} onChange={handleChange} />
            <div className="rem-time"><span>{formatTime(currentTime)} </span> <small>/</small>  <span>{formatTime(duration)}</span></div>
            <div className="utility-buttons-1">
              <a href={default_audio} download ><HiDownload /></a>
              <span onClick={()=> {
                document.querySelector("#audio-bel-1")?.classList.add("unshow-audio")
                document.querySelector("#main-view-dashboard")?.classList.add("full-001")
              }}><SlArrowDown /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

export default AudioBar;
