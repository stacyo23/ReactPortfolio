import Resume from "../assets/StacyBettsResume.pdf"
import BioImage from "../assets/githubBio.JPG"
import "./styles.css"

const styles = {
    BioImage: {
        height: 500, 
        width: 500
    }
}

const Home = () => {
    return ( 
        // <a href='/../assets/StacyStacyBettsResume.pdf' download>Click to download</a>
        <div className="card text-white bg-info mb-3">
        <div className="card-header">About Me</div>
        <div className="card-body">
         <div className="container">
             <div className="row">
                <div className="col-sm-6">
                    <img src={BioImage} alt="My Image" style= {styles.BioImage} className="responsive"></img>
                 </div>
                <div className="col-sm-6">
                    <p> Hey there, I'm Stacy! I'm a fullstack developer leveraging a background in quality 
                      assurance and process improvement with a passion for problem-solving. Please feel free to contact me via email: stacyo23@yahoo.com</p>  
             </div>
             <div className="row">
              <div className="col-md-6">
              <button id ="btn1" className ="button bg-primary"><i className="fab fa-github"></i></button>
              </div>
              <div className="col-md-6">
              <button id="btn2" className ="button bg-primary"><i className="fab fa-linkedin"></i></button>
              </div>
            </div>
           
        </div>
         </div>
        </div>
      </div>
   
  
    );
}
 
export default Home;