import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
// import Contact from './pages/Contact';
// import Home from './pages/Home';
// import Resume from './pages/Resume';
// import Work from './pages/Work';
// import Carousel from './components/Carousel'
import Header from './components/Header';

function App() {
  
  return (
   <Router>
     <Header />
    
     {/* <div>
       <Route exact path='/'>
         <Home />
       </Route>
       <Route exact path='/work'>
         <Work />
       </Route>
       <Route exact path='/resume'>
         <Resume />
       </Route>
       <Route exact path='/contact'>
         <Contact />
       </Route>
     </div> */}
   </Router>
  );
}

export default App;
