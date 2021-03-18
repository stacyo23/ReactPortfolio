const styles ={
    card: {
        marginRight: 500,
        marginLeft: 500, 
        fontSize: "large"
    }
}

const Contact = () => {
    return ( 
        <div className="card text-white bg-info mb-3" style= {styles.card} >
      <div className="card-header contact">Contact</div>
      <div className="card-body">
        <form>
          <div className="form-group">
            <label for="formGroupExampleInput">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Name"></input>
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput2">Email</label>
            <input type="text" className="form-control" id="email" placeholder="Email"></input>
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput3">Message</label>
            <input type="text" className="form-control" id="message" placeholder="Message"></input>
          </div>
          <button type="submit" className="btn bg-primary" id="sub">Submit</button>
        </form>
      </div>
    </div>
     );
}
 
export default Contact;