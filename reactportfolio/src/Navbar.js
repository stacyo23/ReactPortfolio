import { Link } from 'react-router-dom'; 

const Navbar = () => {
    return ( 
           <navbar className="navbar">
               <h1> Stacy Betts </h1>
               <div className="links">
                   <Link to="/">Home</Link>
                   <Link to="/Portfolio">Portfolio</Link>
                   <Link to="/Contact">Contact</Link>

               </div>
           </navbar>
     );
}
 
export default Navbar;