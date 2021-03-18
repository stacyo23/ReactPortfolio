// import styles from "./styles.css"



const styles = {
    container: {
        height: 200, 
        width: 500,
        marginTop: 75
    }
}

const Footer = () => {
    return (  
        <div className="container" style={styles.container}>
                   <h3 className="text-white">&copy;2021</h3>
                    <h6 className="text-info">Built with React</h6>                   
                    <h5 className="text-white">Please feel free to contact me below:</h5>
                     <a className="fas fa-envelope-square text-white mr-3" 
                        id="email" 
                        href="mailto:stacy023@yahoo.com" >Email</a>
                    <a className="fab fa-github text-white mr-3" 
                        id="github" 
                        href="https://github.com/stacyo23" >Github</a>
                    <a className="fab fa-linkedin text-white mr-3" 
                        id="linkedin" 
                        href="https://www.linkedin.com/in/stacy-betts-fullstack/">LinkedIn</a>

        </div>
    );
}
 
export default Footer;