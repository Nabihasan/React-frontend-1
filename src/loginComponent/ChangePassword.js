import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PassService from '../services/PassService';
import Sign_img from '../components/Sign_img';
const ChangePassword = () => {

  const [pass1,setPass1] = useState("");
  const [pass2,setPass2] = useState("");

    const navigate = useNavigate();

    const onChange1=(e)=>{
      setPass1(e.target.value);
    }
    const onChange2=(e)=>{
      setPass2(e.target.value);
    }
    const handle = () => {
        // Navigate to a different page or route
        navigate("/");
      };
    const handleClick=()=>{
      // alert(localStorage.getItem('email'));
      PassService.newpass(pass1,pass2,`${localStorage.getItem('email')}`);
      navigate("/");
    }
  return (
    <div>
      <div className='container' id='parent-container'>
        <div className='heading-div'>
            <h2 id='heading-h2' align='center'>Change Password</h2>
        </div>
        <div className='input-div'>
        <form>
            <label id="pwd-lbl1" style={{fontSize:25}} >New Password</label>  
            <input id='pass1' onChange={onChange1} className='newpwd-input' type='password' name='newpassword' style={{marginLeft:'10%'}} required/>
            <br></br>
            <label id="pwd-lbl2" style={{fontSize:25}}>Confirm Password</label> 
            <input id='pass2' onChange={onChange2} className='newpwd-input' type='password' name='confirmpassword' style={{marginLeft:'3%'}} required />
            <br></br>
            <br></br>
            <br></br>
           
            <input id='submit-btn' onClick={handleClick} className='btn btn-primary' type='submit'  />
            <br></br>
            <br></br>
            <a id='back-a' href='#' onClick={handle}>Back</a>
        </form>

        </div>

        <Sign_img />


      </div>
    </div>
  )
}

export default ChangePassword;
