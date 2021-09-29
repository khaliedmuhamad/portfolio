import React, { useState ,useEffect} from 'react';
import './About.css';
import './AboutMedia.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Progress from 'gogolee-react-progress-circle';
import 'gogolee-react-progress-circle/lib/main.css';

export  function About (){

    const [icons] = useState([
        { skill:'html5',level:90,color:"#e34c26",detail:'HyperText Markup Language (HTML)',animation:'fade-down-right' },
        { skill:"css3",level:80,color:"#2965f1",detail:'Cascading Style Sheets (CSS)',animation:'fade-down' } ,
        { skill:"js",level:75,color:"#f0db4f",detail:'JavaScript (JS),Libraries (e.g., jQuery)',animation:'fade-down-left' },
        { skill:"bootstrap",level:85,color:"#563d7c",detail:'CSS  JS Frameworks (Bootstrap)',animation:'fade-up-right' },
        { skill:'sass',level:80,color:"#cc6699" ,detail:'CSS Preprocessors (Sass)',animation:'fade-up'},
        { skill:'react',level:70,color:"#68dafb",detail:'JS Frameworks (React.js)',animation:'fade-up-left' }]);
      
        useEffect(() => {
          Aos.init({duration:3000})
        }, [])
        return( 
            <>
                <div className="About separate " id='About'>
                    <div className='container' >
                <h1 className='text-center head-section' data-aos='slide-down'>About me </h1> 
                   <div className='right'> 
                   <p className='col-12 text-center' data-aos="slide-left">
                    I am an experienced <span class='high-light'>front-end developer</span> from <span class='high-light'>Egypt</span> .I specialise in the creation of great quality websites that are fully compatible with all devices, mobile and desktop. My attention to details and efficient execution of meeting project deadlines set me apart from most web developers.</p>
                </div>
                <h1 className="text-center head-section" >developer tools:</h1>
                <ul className='row'>
                    {icons.map((i,n) => <li key={n} className='item-skill  list-inline-item col-lg-4 col-md-4 col-sm-12 dev-item' data-aos={i.animation}>
                    <div className='cover'>
                   <Progress className='progress' isTextShown={false} number={i.level} strokeColor={i.color}><i className={`fab fa-${i.skill}`}></i></Progress>
                    <div className='info-skill text-center' style={{color:i.color}}>{i.detail}</div>   
                        </div>
                        </li>)}
                    </ul>
            </div>    
            </div> 
           
            </>
        );
    }
