import React from 'react';
import{Route, Switch} from 'react-router-dom';
import About from './About';
import Error from './Error';
import Search from './Search';
import Contact from './Contact';
import Services from './Services';
import Menu from './Menu';
import User from './User';

  


const App =() =>{
  return(
    <>
    <Menu />
    <Switch>
      <Route exact path="/" component={About} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/contact" component={Contact} />
      <Route path="/user/:fname/:lname" component={User} />
      <Route path="/Search" component={Search} />
      <Route component={Error} />
    </Switch>

    </>
  );
};

export default App;
