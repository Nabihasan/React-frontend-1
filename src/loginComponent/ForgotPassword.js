import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import PassService from '../services/PassService.js';
import Sign_img from '../components/Sign_img.js';
const ForgotPassword = () => {
  const [email,setEmail]=useState("");

    
  const navigate = useNavigate();
  const onChange=(e)=>{
       setEmail(e.target.value);
  }  
  const handle = () => {
        // Navigate to a different page or route
        navigate("/");
      };
      const handleClick = async (e) => {
        e.preventDefault();
        // Navigate to a different page or route
         await PassService.verifyMail(email);
        // console.log(com);
        localStorage.setItem("email",email);
        navigate("/verifyOTP");

      };
  return (
    <div>
    <div className='container' id="parent-container">
   

<div className="heading-div">

    <h2 id="heading-h2" align="center">Verify Your Account</h2>

</div>


<div className="input-div">

    <form >
        <label for="">Enter Your Personal Email </label> <br></br>
        <input id="email-input" type="text" name="email" onChange={onChange} required /><br></br><br></br>

        <Button  id="submit-btn" class="btn btn-primary" type="Submit" onClick={handleClick} >
        Confirm
        </Button><br></br>
        
        <a href="#" onClick={handle}>Back to Login</a>
          {/* <Link   onClick={handle}>Back to Login</Link>
          */}
        </form>
       

</div>
   <Sign_img />
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
        crossorigin="anonymous"></script>


</div>
   
  )
}

export default ForgotPassword;
