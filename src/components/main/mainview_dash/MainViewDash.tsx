
import React, { useContext, useEffect } from 'react'
import { useState} from 'react'
import './mainview_dash.css'
import MultipleFileUploader from './File';
import char from '../../../logo.svg'
import { IoMdArrowDropdown } from "react-icons/io";
import AudioBar from './audio/Audio';
import { SlArrowUp } from 'react-icons/sl';
import { FaPlayCircle, FaPauseCircle, FaTimes } from "react-icons/fa";
import { IoReturnUpForwardOutline } from 'react-icons/io5';
import { GlobalContext } from '../Main';


const MainViewDash = () => {
    const [toggle, setToggle] = useState(1);
    const [content, setContent] = useState("")
    const [voice, setVoice] = useState(false)
    const [toggleSide, setToggleSide] = useState(true)

    const useCont = useContext(GlobalContext)
    const setPause = useCont!.setPause
    const pause = useCont!.pause
    const currentTime = useCont!.currentTime

    const setCurrentTime = useCont!.setCurrentTime

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

    let truth = false

    useEffect(()=> {
        const modal = document.getElementById("voice-modal")
        const mode_2 = document.querySelector('#boss-boss')
        window.onclick = function(event:any) {
            if (modal && voice) {
                if (event.target != modal && truth && !modal.contains(event.target)) {
                    setVoice(false)
                    truth = !truth
                }
                if (mode_2?.contains(event.target)) {
                    setVoice(false)
                    truth = !truth
                }
                else {
                    truth = !truth
                }
        }
        }
    })
    

  return (
    <div className="main-view-dashboard" id='main-view-dashboard'>

        <div className="main-focus">
            <div className="sel-content-1">
                <div className={`select-contents ${toggle === 1 ? 's1-c1-active': ''}`} 
                onClick={
                    ()=> {setToggle(1)}
                }
                >Text to Speech</div>
                <div className={`select-contents ${toggle === 0 ? 's1-c1-active': ''}`} 
                onClick={
                    ()=> {setToggle(0)}
                }
                >Document to Speech</div> 
            </div>
            <div className="sel-content-2">
                <div className={`${toggle=== 0 ? 'none' :'wrt-1-dc-1'}`}>
                    <textarea 
                    name="main-input-box" 
                    id="main-input-box-1"
                    value={content}
                    cols={30} placeholder='Type or paste text here to convert to speech...'
                    onChange={(e) => {setContent(e.target.value)}}
                    ></textarea>
                </div>
                <div className={`${toggle==1 ? 'none' : 'doc-upload-focus'}`}>
                  <MultipleFileUploader/>
                </div>
            </div>
            <div className="big-11-1">
                <div className={`${voice ? 'drp-1-12' : 'none'}`} id='voice-modal'>
                    <p>Premade Voices</p>
                    <form>
                        <input type="search" id="search-voices" placeholder='Search for a voice'/>
                    </form>
                    <ul id='boss-boss'>
                        <li className='drp-1-active'><img src={char} alt="Image" /> <span>John</span></li>
                        <li><img src={char} alt="Image" /> <span>John</span></li>
                        <li><img src={char} alt="Image" /> <span>John</span></li>
                        <li><img src={char} alt="Image" /> <span>John</span></li>
                        <li><img src={char} alt="Image" /> <span>John</span></li>
                        <li><img src={char} alt="Image" /> <span>John</span></li>
                        <li><img src={char} alt="Image" /> <span>John</span></li>
                        <li><img src={char} alt="Image" /> <span>John</span></li>
                        <li><img src={char} alt="Image" /> <span>John</span></li>
                        <li><img src={char} alt="Image" /> <span>John</span></li>
                        <li><img src={char} alt="Image" /> <span>John</span></li>
                        <li><img src={char} alt="Image" /> <span>John</span></li>
                    </ul>
                    <a href="#" className='aa-aa'><button>Create a voice</button></a>
                </div>
                
                <div className="u-d-1">
                
                <div className="gandalf">
                    <p className="img-name"
                        onClick={()=> {setVoice(true)}}
                    >
                        <span onClick={handlePause}>{!pause ? <FaPlayCircle/> : <FaPauseCircle/>}</span> <span>Joshua Okechukwu</span> <span className='d-1arr'><IoMdArrowDropdown/></span>
                    </p>
                <button className="gen-12" onClick={()=> {
                    document.querySelector("#side-focus")?.classList.remove("side-focus-destroy")
                    document.querySelector("#side-focus")?.classList.add("side-focus-11")
                    document.querySelector("#goku")?.classList.remove("none")
                }}>Settings</button>
                </div>
                <button className="gen-1">Generate Speech</button>
            </div>
            </div>
            
        </div>

        <div className="side-focus" id='side-focus'>
            <p className='goku' id="goku" onClick={()=> {
                document.querySelector("#side-focus")?.classList.add("side-focus-destroy")
                document.querySelector("#goku")?.classList.add("none")
                // document.querySelector("#side-focus")?.classList.remove("side-focus-11")
            }}><FaTimes/></p>
            <div className="nav-tabs-side">
                <p className={`${toggleSide ? 'nav-1-1p': ''}`} onClick={()=> {setToggleSide(true)}}>Settings</p>
                <p className={`${!toggleSide ? 'nav-1-1p': ''}`} onClick={()=> {setToggleSide(false)}}>History</p>
            </div>
            { toggleSide ? 
                <div className="side-main-1">
                <p className='tile-0101'>Model</p>
                <div className="model-box-side">
                    <div className="model-card-1">
                        <div className="model-card-11">
                            <p className="model-name">Bark AI default <span><IoReturnUpForwardOutline/></span></p>
                            <p className="model-info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, explicabo dolore quidem voluptatibus repellendus illum nobis, perferendis ea amet tempora enim sint! Doloribus, enim doloremque?</p>
                            <div className="supported-lang-1">
                                <ul>
                                    <li>English</li>
                                    <li>French</li>
                                    <li>Spanish</li>
                                    <li>Spanish</li>
                                    <li>Japanese</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="variables-tune">
                            <div className="tune-1">
                                <p className='tun-1-d'>Stability</p>
                                <div className="ranges-1">
                                    <p>More Stable</p>
                                    <p>Less Stable</p>
                                </div>
                                <input type="range" className='tune0-1' min={0} max={100} />
                            </div>
                            <div className="tune-1">
                                <p className='tun-1-d'>Stability</p>
                                <div className="ranges-1">
                                    <p>More Stable</p>
                                    <p>Less Stable</p>
                                </div>
                                <input type="range" className='tune0-1' min={0} max={100} />
                            </div>
                            <div className="tune-1">
                                <p className='tun-1-d'>Stability</p>
                                <div className="ranges-1">
                                    <p>More Stable</p>
                                    <p>Less Stable</p>
                                </div>
                                <input type="range" className='tune0-1' min={0} max={100} />
                            </div>
                            <div className="tune-1">
                                <p className='tun-1-d'>Stability</p>
                                <div className="ranges-1">
                                    <p>More Stable</p>
                                    <p>Less Stable</p>
                                </div>
                                <input type="range" className='tune0-1' min={0} max={100} />
                            </div>
                        </div>
                    </div>
                </div>
                </div> :
                
                <div className="side-main-2">
                    {/* <p className="info-emp">Your recent history will show here.</p> */}
                    <div className="boxes-1-1">
                        <p className="name-his-1">The lore of the fabled dragon</p>
                        <div className="box-hol-1">
                            <span><FaPlayCircle/></span>
                            <input type="range" className='goodie-2-shoes'/>
                        </div>
                        <p className="aud-side-text"><span>Input:</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, voluptas! Molestias, excepturi vitae omnis quisquam voluptatibus dolores sunt quae fuga iste voluptatum quas nesciunt error porro labore perferendis beatae suscipit culpa optio facilis! Magni amet suscipit eligendi velit, non doloribus, fuga qui quidem recusandae asperiores odio, eaque dignissimos voluptates enim.</p>
                    </div>
                    <div className="boxes-1-1">
                        <p className="name-his-1">The lore of the fabled dragon</p>
                        <div className="box-hol-1">
                            <span><FaPlayCircle/></span>
                            <input type="range" className='goodie-2-shoes'/>
                        </div>
                        <p className="aud-side-text"><span>Input:</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, voluptas! Molestias, excepturi vitae omnis quisquam voluptatibus dolores sunt quae fuga iste voluptatum quas nesciunt error porro labore perferendis beatae suscipit culpa optio facilis! Magni amet suscipit eligendi velit, non doloribus, fuga qui quidem recusandae asperiores odio, eaque dignissimos voluptates enim.</p>
                    </div>
                    <div className="boxes-1-1">
                        <p className="name-his-1">The lore of the fabled dragon</p>
                        <div className="box-hol-1">
                            <span><FaPlayCircle/></span>
                            <input type="range" className='goodie-2-shoes'/>
                        </div>
                        <p className="aud-side-text"><span>Input:</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, voluptas! Molestias, excepturi vitae omnis quisquam voluptatibus dolores sunt quae fuga iste voluptatum quas nesciunt error porro labore perferendis beatae suscipit culpa optio facilis! Magni amet suscipit eligendi velit, non doloribus, fuga qui quidem recusandae asperiores odio, eaque dignissimos voluptates enim.</p>
                    </div>

                </div>
                }
        </div>

        <div className="show-audio-12">
        <span onClick={()=> {
                document.querySelector("#audio-bel-1")?.classList.remove("unshow-audio")
                document.querySelector("#main-view-dashboard")?.classList.remove("full-001")
              }}><SlArrowUp/></span>
        </div>
        <AudioBar/>
    </div>
  )
}

export default MainViewDash
