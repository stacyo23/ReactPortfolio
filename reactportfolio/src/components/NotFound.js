import { Link , useHistory} from 'react-router-dom';
import react from "react";

const NotFound = () => {
const history =useHistory();

    return (
        <div>
            <h2>Sorry</h2>
            <p> That page cannot be found</p>
            <Link to="/">Back to homepage. </Link>
        </div>
      );
}
 
export default NotFound;