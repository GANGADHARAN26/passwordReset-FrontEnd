import { useState } from "react"
import { backendUrl } from "../../config";
// import axios from "axios";

const Forgot = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log("email : "+email)
      localStorage.setItem('forgot-email',JSON.stringify(email))
      const forgotResponse=await fetch(`${backendUrl}/forgotPassword`,{
        method: "POST",
        body:JSON.stringify({email}),
        headers:{
          'Content-Type': 'application/json',
        }
      })
      const data=await forgotResponse.json(JSON.stringify(data));
       console.log(data)
      
      setEmail("")

    };
  
    return (
      <section className="container-fluid" style={{marginTop:'11%'}}>
      <section className="row justify-content-center">
        <section className="col-12 col-sm-6 col-md-4">
        <h2>Forgot Password</h2>
        <form >
          <div className="form-group">
            <label className="m-1">Email:</label>
            <input
             className="form-control m-1"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-block m-2">Submit</button>
        </form>
        </section>
    </section>
  </section>
    );
  }
  

export default Forgot