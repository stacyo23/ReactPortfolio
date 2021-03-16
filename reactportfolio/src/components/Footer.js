// import styles from "./styles.css"



const styles = {
    container: {
        height: 500, 
        width: 500
    }
}

const Footer = () => {
    return (  
        <div className="container" style={styles.container}>
                    &copy;2020 Stacy Betts
                    <br></br>
                    <a className="far fa-envelop text-white mr-3" 
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