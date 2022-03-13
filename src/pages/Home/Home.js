import React,{useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { animations , easings  } from 'react-animation';
import Social from '../Connects/Social.js';
import './Home.css';
import './HomeMedia.css';
import { Nav } from '../NavBar/Nav.js';


export function Home () {
       
  useEffect(() => {
    Aos.init({duration:1000})
  }, [])
        const style = {
          animation: animations.easeInSine
        }
        const style2 = {
            animation: `pop-in ${easings.easeOutExpo} 10s forwards`
          }
        return (
          <>
  
          <div className='upper'>
                    <Nav />
                <div style={style}  className='Home pt-2 pb-2'>
                    <div className='container'>
                        <div className='row '>
                            <div className='inform col-lg-12 col-md-12 col-sm-12 justify-center text-center'>
                                <h1 data-aos='ease-right' style={style2}>Hey, I'M <span>Khaled</span> ;)</h1>
                                <p data-aos='fade-right'>Front End Developer / UX Designer</p>
                                <p data-aos='fade-right'>innovation is my passion</p>                  
                            </div>                               
                        </div>
                        <div className="socialOverlay d-flex .text-center" style={style}>
                            <Social  />
                        </div>
                    </div>            
                    </div>
                
       
  </div>
          </>
    
            )
    }
    
  
 

    