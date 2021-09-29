import './Connects.css';
import './ConnectsMedia.css';
import React,{useEffect}  from 'react';
import svgs from './7879.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Contact from './Contact.js';

export  function Connects (){
          
    useEffect(() => {
        Aos.init({duration:3000})
      }, [])
        return (<>

        <div className='Connects'  id='Contact'>
            <div className='container' data-aos='flip-up'>
            <h1 className='head text-center head-section' data-aos='fade'> Let us know if you need any help! </h1>
                <div className='row'>                
                    <div className='social  col-lg-7 col-md-6 col-sm-12 col-xs-12'>
                    <img src={svgs} className='hello' id='hello' alt='svgs' width='100%'  />
                    </div>
                <Contact />
                </div>
             </div>
        </div> 
       
        </>
        )
    
    }
