import React, {Component} from 'react';
import Social from '../Connects/Social';
import './Footer.css';
import '../Connects/ConnectsMedia.css';
export default  class Footer extends Component{
    render(){
        return (
        <div className='Footer'> 
        <div className='container'>
        <div className='row'>
            <div className='links col-md-5 col-sm-12 col-xs-12'>
            <h2 className="brand">KOTAM</h2>
      <ul className="list-inline link-list">
        <li className="link-item list-item">
    Home
        </li>
        <li className="link-item list-item">
    About
        </li>
      
        <li className="link-item ">
     Sample
        </li>
        <li className="link-item list-item">
          Opinion
        </li>
        <li className="link-item list-item">
          Connects
        </li>
      </ul>  
            </div>
            <div className=' social col-md-5 col-sm-12 col-xs-12'>
             <Social />
             </div>
        </div>
          </div>
        </div>)
    }
    }