import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import svg from'./programmer-animate.svg';
import { animations , easings  } from 'react-animation';
import {About} from '../About/About.js';
import {Projects} from '../Projects/Projects.js';
import {Connects} from '../Connects/Connects.js';
import Social from '../Connects/Social.js';
import './Home.css';
import './HomeMedia.css';
export function Home () {
       
  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
        const style = {
          animation: animations.easeInSine
        }
        const style2 = {
            animation: `pop-in ${easings.easeOutExpo} 2.5s forwards`
          }
        return (
          <>
                <div style={style}  className='Home'>
                    <div className='container'>
                        <div className='row '>
                            <div data-aos='fade-left' className='HomeSvg col-md-6 col-sm-8 col-xs-5'>
                                    <img className='home-img' src={svg} alt="svg" />
                            </div>
                            <div className='inform col-lg-6 col-md-6 col-sm-12'>
                                <h1 data-aos='fade-up' style={style2}>Hey, I'M <span>Khaled</span> ;)</h1>
                                <p data-aos='fade-up'>Front End Developer / web designer</p>
                                <p data-aos='fade-up'>innovation is my passion</p>                  
                            </div>                               
                        </div>
                        <div className="socialOverlay d-flex .text-center" style={style}>
                            <Social  />
                        </div>
                    </div>            
     
                </div>
                 <About  />
                 <Projects />
                <Connects  />

  </>
            )
    }
    
  
 

    