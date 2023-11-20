import React,{useState} from 'react';
import banner1 from '../img/login-banner-office.png';
import { MdLockPerson, MdOutlinePassword  } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash  } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);



  const handleLogin = () => {
    axios.post('http://localhost:3000/Login', { username, password })
      .then(response => {
        console.log(response.data);
    
      })
      .catch(error => {
        console.error('Login failed:', error.response.data);
      });
  };

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

  return (
    <>
<div className='login-body'>
    <div className='login-container shadow'>

<div className='banner'>
<img src={banner1} alt='login-banner'/>
</div>

<div className='login-section'>
<div className=' mt-5 mb-2 mx-3 p-3' style={{borderRadius:"15px"}}>
<h5>Staff Login</h5>
<p>Enter your account  details to sign in</p>

 <form onSubmit={handleLogin}>
 <div className='from-container'>
 <input type='text' placeholder='Enter Username' className='login-form my-1' value={username} onChange={(e) => setUsername(e.target.value)}/>
 <MdLockPerson   className="icon"/>
 </div>

 <div className='from-container'>
 <input type={showPassword ? 'text' : 'password'} placeholder='Enter Password' className='login-form mt-1' value={password} onChange={(e) => setPassword(e.target.value)}/>
 <MdOutlinePassword    className="icon"/>
 {showPassword ? (
                    <FaRegEyeSlash
                      className='icon-r'
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <FaRegEye
                      className='icon-r'
                      onClick={togglePasswordVisibility}
                    />
                  )}

                  
 </div>
 <Link to='/' className='login-text-pass'>Forgot Password ?</Link>

 <input type='submit' className='login-btn mt-4' value="Sign in"/>
    </form>
</div>
   
</div>

    </div>
</div>
    </>
  )
}

export default Login
