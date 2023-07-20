//UserLogin 
//import './login.css';
import { Modal } from 'react-bootstrap';
import React, { useContext, useState, useEffect } from 'react';
import College from './College';
import { Alert } from 'bootstrap';
import  axios from 'axios';
import { Axios } from 'axios';
import { url } from './MainComponent';
import VerifyEmail from './VerifyEmail';



function ForgotPassword({  setlogin }) {

    // const history = useHistory();
    const [userName, setuserName] = useState("");
    const [password, setPassword] = useState("");
    const [err, setError] = useState("");
    const [otppage,setOtpPage]=useState("");
    useEffect(() => {
        // if(!isModal)
        setlogin(true)
    })
    function handleSubmit() {
        // const UN = event.target.value;
     
        
      
        // console.log("Gii")
        axios.post(`${url}users/checkMail`, { "mail": userName })
            .then((res) => {
                if (!res.data) {
                    // setOtpPage(true);
                    setError(`Invalid email address. `);
                   

                }
                else {
                    console.log(res)
                    setOtpPage(true);
                   
                }
            })
    }
    function handleUserName(event) {
        const UN = event.target.value;
        setuserName(UN)
    }
    function handlePassword(event) {
        const PS = event.target.value;
        setPassword(PS);
    }
   
    return (
        <>
            {
             
                !otppage?
                <div className='app'>
                    <a href='/' className='logo container' >
                        <img style={{position:"absolute",marginBottom:"40px"}}height={150} width={150} src='https://res.cloudinary.com/dofftzsmf/image/upload/v1689507529/COLLEGE_WEB_bmtrb7.png' className="ms-2" />


                    </a>
                    <div className="outer">
                        <div className="inner">
                            {/* <form > */}
                                <h3>Forgot Password</h3>
                                <div className="form-group mt-4">
                                  
                                    <input type="text" value={userName} className="form-control" onChange={handleUserName} placeholder='Enter Email' required />
                                    {err && <p className='text-danger mt-1 ms-3 mb-0 '> {err}</p>}
                              
                                </div>
                              
                                <button onClick={handleSubmit} className='btn btn-dark btn-lg btn-block mt-2'>Verify Email</button>
                                <p className='text-center mb-0'>Don't have an account?<a href='/signup'> Sign Up</a></p>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
                :
                <VerifyEmail mail={userName} forgotPassword={true}/>
            }
                            
        </>

    );
}

export default ForgotPassword;


