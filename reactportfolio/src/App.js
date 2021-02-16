import './App.css';
import Navbar from './Navbar'
import Footer from './Footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Portfolio from './Portfolio';
import Home from '/Home'; 
import Contact from './Contact';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
       <Switch>
         <Route exact path= "/">
          <Home />
         </Route>
         <Route exact path="/portfolio">
          <Portfolio />
         </Route>
         <Route exact path="/contact">
          <Contact />
         </Route>
         <Route path="*">
          <NotFound />
         </Route>
       </Switch>
        <Footer />      
    </div>
    </div>

    </Router>
  );
}

export default App;
