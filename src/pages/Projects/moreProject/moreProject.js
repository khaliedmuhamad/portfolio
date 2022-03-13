import React, {Component} from 'react';
import {getId} from '../../../api/api.js';
import video from './loading.mp4'
import './moreProject.css';
import {Carousel} from 'react-responsive-carousel';
import Footer from '../../Footer/Footer'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Nav } from '../../NavBar/Nav.js';
export   class MoreProject extends Component{
    
    state = {
        project:{},
        loading:true,
    }
  
    componentDidMount() {
        const id = this.props.match.params.id;
        getId(parseInt(id)).then(project => setTimeout(() => this.setState({
            project,
            loading:false
        })
    ,500)
    )
    } 
    back = () =>{ this.props.history.push('/')}
     
    render(){ 
        const item = this.state.project;
        const loading = this.state.loading;

        if (loading) return (<video className='loadingVideo' src={video} autoPlay muted  alt='loading wait'/>)
    return (  

    <div className='MoreProject'>
        <Nav />
        <div className='container'>
            <h1 className='h1'>{item.name}</h1>
            <p className='text-capitalize'>produced: {item.date}</p>
            <div className='slider'>
        <Carousel showIndicators={false} axis={'horizontal'} autoPlay={true} interval={2000} transitionTime={500} emulateTouch={true}  >
                    {item.images.map( i =><div>
                        <img src={i} alt={i} width='100%' />
                        </div>)}
        </Carousel>
        </div>
        <div className="inform">
            <h2>Description</h2>
             <p>{item.description}</p>           
            <hr />
            <h2>features</h2>
            <ul className='list'>
            {item.Features.map((l,n)=>
                <li className='items' key={n}>{l}</li>
            )}
            </ul>
        </div> 
        
        </div>
       <Footer />
   </div>
    );
}}
