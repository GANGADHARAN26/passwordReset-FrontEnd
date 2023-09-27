import { useNavigate } from "react-router-dom"

const LogedPage = () => {
  const navigate=useNavigate()
  return (
    <section className="container-fluid" style={{marginTop:'11%'}}>
    <section className="row justify-content-center">
      <section className="col-12 col-sm-6 col-md-4">
    <h1>your are loged in successfully</h1>
    <button
    className="btn btn-danger btn-block ml-4"
    onClick={()=>{localStorage.removeItem('user');
  navigate('/login')}}
    >Logout</button>
       </section>
    </section>
  </section>

  )
}

export default LogedPage