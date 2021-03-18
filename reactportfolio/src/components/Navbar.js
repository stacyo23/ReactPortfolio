import { Link } from 'react-router-dom'; 
import Resume from "../assets/StacyBettsResume.pdf"


const styles ={
     
    link: {
    marginRight: 5,
    fontSize: "large"
    },
    brand: {
        color: "white",
        fontFamily: "Pacifico"
    }
}

const Navbar = () => {
    return ( 
           <navbar className="navbar" >
               <h1 href= "/" style={styles.brand}> Stacy Betts </h1>
               <div className="links">
                   <Link to="/" className="text-info" style = {styles.link} >Home</Link>
                   <Link to="/Portfolio" className="text-info" style = {styles.link}>Portfolio</Link>
                   <Link to="/Contact" className="text-info" style = {styles.link}>Contact</Link>
                   <a href= {Resume}download className="text-info" style = {styles.link}>Resume</a>
               </div>
           </navbar>
     );
}
 
export default Navbar;