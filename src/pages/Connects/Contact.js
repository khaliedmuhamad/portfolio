import React from "react";
import {Button} from '../../Components/button/button.js';


export default function  Contact  () {
 


  return (
    <div className='form  col-lg-5 col-md-6 col-sm-10 col-xs-10'>
         <svg className="icon text-center" xmlns="http://www.w3.org/2000/svg">
             <path d="M61.2 34c0 15.022-12.178 27.2-27.2 27.2C18.978 61.2 6.8 49.022 6.8 34 6.8 18.978 18.978 6.8 34 6.8c15.022 0 27.2 12.178 27.2 27.2z" fill="#D8E4ED"></path><path d="M34 68C15.223 68 0 52.778 0 34 0 15.223 15.223 0 34 0c18.778 0 34 15.223 34 34-.021 18.769-15.231 33.979-34 34zm0-65.733C16.474 2.267 2.267 16.474 2.267 34S16.474 65.733 34 65.733 65.733 51.526 65.733 34C65.713 16.483 51.517 2.287 34 2.267z" fill="#D8E4ED"></path><path d="M18.133 21.533h31.734v24.934H18.133V21.533z" fill="#fff"></path><path d="M18.133 21.533L34 35.133l15.867-13.6H18.133z" fill="#C8D8E4"></path>
         </svg>
         <h2 className='s-head text-center'>Send Us a Message</h2>
         <p>Questions? We're here to listen and respond!</p>
    <form className="contact-form">
      <div>
        <label htmlFor="name">
            <input type="text" name="user_name" value='Call: +201019473809'   id="name"  className='nameLabel' disabled/>
        </label>
      </div>
      <div>
        <label htmlFor="email">
        <input type="email" name="user_email" value='Send to : khalied.mo2030@gmail.com' id="email" className='emailLabel' disabled/>
        </label>
      </div>
      <div>
      </div>
      <Button  class={"btn-block"} type="submit" name={"Send"} />
    </form>
    </div>
  );
};





  
