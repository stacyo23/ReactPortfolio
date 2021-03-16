import { Link } from 'react-router-dom'; 
import Resume from "../assets/StacyBettsResume.pdf"
import styles from "./styles.css"; 


const Navbar = () => {
    return ( 
           <navbar className="navbar">
               <h1 href= "/"> Stacy Betts </h1>
               <div className="links">
                   <Link to="/" style = {styles.link} >Home</Link>
                   <Link to="/Portfolio">Portfolio</Link>
                   <Link to="/Contact">Contact</Link>
                   <a href= {Resume}download>Resume</a>
               </div>
           </navbar>
     );
}
 
export default Navbar;