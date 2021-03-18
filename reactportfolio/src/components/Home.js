import Resume from "../assets/StacyBettsResume.pdf"
import BioImage from "../assets/githubBio.JPG"
import "./styles.css"

const styles = {
    BioImage: {
        height: 300, 
        width: 250,
        marginRight: 1000
    },
    card: {
        marginRight: 460,
        marginLeft: 400
    },
    spacing: {
        textAlign: "center"

    }

}

const Home = () => {
    return ( 
        // <a href='/../assets/StacyStacyBettsResume.pdf' download>Click to download</a>
        <div className="card text-white bg-info mb-3" style={styles.card}>
        <div className="card-header">About Me</div>
        <div className="card-body">
         <div className="container">
             <div className="row">
                <div className="col-sm-6">
                    <img src={BioImage} alt="My Image" style= {styles.BioImage} className="responsive"></img>
                 </div>
                <div className="col-sm-6 " style= {styles.spacing} >
                    <p> Hey there, I'm Stacy! I'm a fullstack developer leveraging a background in quality 
                      assurance and process improvement with a passion for problem-solving. I have a love 
                      for learning new things and curiosity is my greatest teacher. 
                      For any questions or feedback, please feel free to contact me via email: stacyo23@yahoo.com</p>  
             </div>
             
           
        </div>
         </div>
        </div>
      </div>
   
  
    );
}
 
export default Home;