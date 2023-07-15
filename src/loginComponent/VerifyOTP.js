import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import PassService from '../services/PassService';
import Sign_img from '../components/Sign_img';
const VerifyOTP = () => {

  const [otp,setOtp] = useState("");

    const navigate = useNavigate();
    const handle = () => {
        // Navigate to a different page or route
        navigate("/");
      };
      const onChange=(e)=>{
        setOtp(e.target.value);
      }
      const handleClick = () => {
        // Navigate to a different page or route
        PassService.verifyotp(otp);
        navigate("/changepassword");
      };
  return (
    <div>
    <div className='container' id="parent-container">
   

<div className="heading-div">

    <h2 id="heading-h2" align="center">Verify OTP</h2>

</div>


<div className="input-div">

    <form >
        <label for="">Enter OTP </label> <br></br>
        <input id="email-input" type="number" name="otp" onChange={onChange} /><br></br>

        <input type="Submit" id="submit-btn" class="btn btn-primary"  onClick={handleClick} /><br></br>
        
          <a href="#" onClick={handle}>Back to Login</a>
        </form>
       

</div>
   <Sign_img />
</div>

</div>
  )
}

export default VerifyOTP;
