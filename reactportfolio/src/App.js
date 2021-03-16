import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Portfolio from './components/Portfolio';
import Home from './components/Home'; 
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
       <Switch>
       <Route exact path={["/", "/home"]} component = {Home}>
          <Home />
         </Route>
         <Route exact path="/portfolio" component = {Portfolio}>
          <Portfolio />
         </Route>
         <Route exact path="/contact" component = {Contact}>
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
