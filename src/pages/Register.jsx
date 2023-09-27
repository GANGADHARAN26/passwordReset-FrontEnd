import { useState } from "react";
import { backendUrl } from "../../config";
import { Navigate, useNavigate } from "react-router-dom";

const Register = () => {
const navigate=useNavigate();

    const initialState ={
        name: "",
        email: "",
        password: "",
    }
  const [formdata, setFormData] = useState(initialState);
  const handleSubmit =async (e) => {
    e.preventDefault()
    const registerResponse=await fetch(`${backendUrl}/register`,{
      method: "POST",
      body:JSON.stringify(formdata),
      headers:{
        'Content-Type': 'application/json',
      }
    })
    const data=await registerResponse.json();
     console.log(data)
    setFormData(initialState);
  }
  if(localStorage.getItem('user')&&JSON.parse(localStorage.getItem('user'))){
    return <Navigate to={'/'} replace/>
}
const navigateToLogin=()=>{
  navigate('/login')
}
  return (
    <section className="container-fluid" style={{marginTop:'11%'}}>
    <section className="row justify-content-center">
      <section className="col-12 col-sm-6 col-md-4">
    <form >
      <h3>Register form</h3>
      <div className="form-group">
        <label htmlFor="name" className="m-1">Name</label>
        <input
         className="form-control m-1"
          type="text"
          name="text"
          id="text"
          value={formdata.name}
          onChange={(e)=>setFormData({...formdata,name:e.target.value})}
          placeholder="Enter your name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="m-1">Email</label>
        <input
         className="form-control m-1"
          type="email"
          name="email"
          id="email"
          value={formdata.email}
          onChange={(e)=>setFormData({...formdata,email:e.target.value})}
          placeholder="Enter your email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="m-1">Password</label>
        <input
         className="form-control m-1"
          type="password"
          name="password"
          id="password"
          value={formdata.password}
          onChange={(e)=>setFormData({...formdata,password:e.target.value})}
          placeholder="Enter your password"
        />
      </div>
      <button type="Submit" className="btn btn-primary btn-block m-2" onClick={handleSubmit}>Submit</button>
      <div className="form-footer m-1">
          <p>Already have an account ? <button onClick={navigateToLogin} className="btn btn-success m-4">Login</button></p>
          
        </div>
    </form >
    </section>
    </section>
  </section>
  );
};

export default Register;
