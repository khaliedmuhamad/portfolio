import React , { Component } from 'react';
export default class Social extends Component{
 state ={ iSocial  : [
        {
          plateform:'facebook',
          link:"https://www.facebook.com/profile.php?id=100008333795144"
        },{
          plateform:'github',
          link:"https://github.com/khaliedmuhamad"

        },{
          plateform:'linkedin',
          link:"https://www.linkedin.com/in/khaled-mohamed-0758781aa/"

        },{
          plateform:'twitter',
          link:"https://twitter.com/khaledM25324847"

        },{
          plateform:'instagram',
          link:"https://www.instagram.com/khaled_mumo/"

        }
       ]}
    render (){
      return(
        
            <ul className='list-unstyled list-media'>
            {this.state.iSocial.map((i,n)=><li className='list-item item-media Homesocial' key={n}>
              <a href={i.link} ><i className={`fab fa-${i.plateform} social-icons` }></i></a>
              </li>)}
            </ul>
    
    )}  
      }