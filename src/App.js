import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './pages/NavBar/Nav.css';
import { BrowserRouter ,Switch ,Route } from 'react-router-dom';
import { Nav } from './pages/NavBar/Nav.js';
import './App.css';
import { Home } from './pages/Home/Home';
import  Footer  from './pages/Footer/Footer.js' 
import { MoreProject } from './pages/Projects/moreProject/moreProject';
function  App () {
  

  return ( 
    <BrowserRouter>
     <div className='App'>
        <Nav  />  
      <Switch>
      <Route path="/" component={Home} exact />
      <Route path={'/Home/:id'} extact component={MoreProject} />
     </Switch> 
     <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;
