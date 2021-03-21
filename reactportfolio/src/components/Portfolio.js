import React from "react";

import bk2 from "../assets/bk2.jpg";
import EDB from "../assets/EDB.jpg";
import FB from "../assets/FB.jpg";
import GitFit from "../assets/GitFit.jpeg";
import PassGen from "../assets/PassGen.jpg";
import Scheduler from "../assets/Scheduler.jpeg";
import BA from "../assets/BA.jpg"

const styles ={
    sizing: {
        height: 200,
        width: "auto",
        marginTop: 20
    },
    special: {
        height: 200, 
        width: 800,
        marginTop: 20
    }

}



const Portfolio = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md">
                <img className= "img-fluid mb-2" src={EDB} alt="Eat-Da-Burger" style = {styles.sizing} />
                <button>Deployed Application</button> <button>Github Repository</button>
            </div>
            <div className="col-md">
                <img className= "img-fluid mb-2" src={FB} alt="FoodieBook" style = {styles.sizing} />
                <button>Deployed Application</button> <button>Github Repository</button>
            </div>
            <div className="col-md">
                <img className= "img-fluid mb-2" src={GitFit} alt="GitFit" style = {styles.sizing} />
                <button>Deployed Application</button> <button>Github Repository</button>
            </div>
        </div>
        <div className="row">
            <div className="col-md">
                <img className= "img-fluid mb-2" src={PassGen} alt="Password Generator" style = {styles.sizing} />
                <button>Deployed Application</button> <button>Github Repository</button>
            </div>
            <div className="col-md">
                <img className= "img-fluid mb-2" src={Scheduler} alt="Workday Scheduler" style = {styles.sizing} />
                <button>Deployed Application</button> <button>Github Repository</button>
            </div>
            <div className="col-md">
                <img className= "img-fluid mb-2" src={BA} alt="Budget Anywhere" style = {styles.special} />
                <button>Deployed Application</button> <button>Github Repository</button>
            </div>
        </div>
    </div>
);
}

 


export default Portfolio;