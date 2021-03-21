import { Link , useHistory} from 'react-router-dom';


const NotFound = () => {
const history =useHistory();

    return (
        <div>
            <h2 className="text-white">Sorry</h2>
            <p className=" text-white"> That page cannot be found</p>

            <Link to="/" className=" text-white">Back to homepage. </Link>
        </div>
      );
}
 
export default NotFound;