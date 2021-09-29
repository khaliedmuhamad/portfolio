import React from 'react';
import './Projects.css';
import '../../Components/button/button.css'
import  { Link } from "react-router-dom";
import {Button} from "../../Components/button/button.js";
export default function Card(props) {
    let {l} = props;
    return(
     
        <div className='project'>
            <img width='100%' src={l.images[0]} alt={l.name} />
            <div className='info' >
              <h1>{l.name}</h1>
              <p>{l.date}</p>
              <Link to={'/Home/' +l.id} exact >
                <Button name={"More"} class={"btn-inline"} />
              </Link>
            </div>
        </div> 

    )
}
