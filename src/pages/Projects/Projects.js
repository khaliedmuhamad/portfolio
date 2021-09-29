
import React, {useState , useEffect} from 'react';
import './Projects.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './ProjectsMedia.css';
import '../../Components/button/button.css';
import Card from './Card.js';
import {getAll} from '../../api/api.js'

export  function Projects (){
const [features] = useState([
    {
     icon:'fas fa-hand-sparkles',
     head:"Clean Code",
     paragraph:"efficient, readable,and well-written."
 },{
    icon:'fas fa-expand-arrows-alt',
    head:"Responsive",
    paragraph:"we make websites fit to all devices"
 },{
    icon:"fas fa-dragon",
    head:"performence",
    paragraph:"fast and modern "
 }
])
const [project, setproject] = useState([])
useEffect(() => {
    getAll().then((data)=>{setproject(data)})
}
)
useEffect(() => {
    Aos.init({duration:3000})
  }, [])
        const feat = features;
        const projects = project;
    return (  
        <>
    <div className='Projects separate' id='Work'>
        <h1 className='text-center head-section' data-aos='zoom-out-up'>Projects</h1>
        <div className='container' data-aos='flip-down'>
            {/* features of projects */}
            <div className='row'>
                <ul className='logo-list list-unstyled list-inline text-center'>
                    {feat.map((i , n) => 
                    <li className='logo-item list-inline-item col-lg-4  col-md-4 col-sm-12 col-xs-12' key={n}>
                        <i className={`${i.icon} icons`}></i>
                        <h4>{i.head}</h4>
                        <p>{i.paragraph}</p>
                    </li>)}
                </ul>
            </div>

        <div className='projectShow'>
        <ul className='row' >
            {projects.map((l,n)=>
            <li key={n}  className='list-inline-item col-lg-6 col-md-5 col-sm-12' data-aos='slide-left' >
           <Card l={l}  />
           </li> )}
           </ul>
           </div>
           </div>
    </div>

  </>
    );
}