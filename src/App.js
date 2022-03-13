import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './pages/NavBar/Nav.css';
import { BrowserRouter ,Switch ,Route } from 'react-router-dom';
import { Nav } from './pages/NavBar/Nav.js';
import './App.css';
import  Footer  from './pages/Footer/Footer.js' 
import { MoreProject } from './pages/Projects/moreProject/moreProject';

import Content from './Content';

function  App () {
  

  return ( 
    <BrowserRouter>
     <div className='App'>     
  <Switch>
      <Route path={'/'}  component={Content} exact />
      <Route path={'/Home/:id'}  component={MoreProject} exact />
     </Switch>
     <Footer />
      </div>
 
    </BrowserRouter>
  );
}

export default App;
