import React, { useState } from "react";
import "../CSS/forgetPassword.css";
import emailjs from "emailjs-com";

const ForgetPasswordPage = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const postUserData = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
  };

  const submitData = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="contact-leftside col-6">
              <div className="background-image">
                {/* <img
                  src="https://res.cloudinary.com/dofftzsmf/image/upload/v1689516021/Untitled_design_mnezki.svg"
                  alt="contactUsImg"
                /> */}
              </div>
            </div>
            <div className="contact-rightside col-6">
              <form onSubmit={submitData}>
                <div className="row">
                  <h1 className="mb-6 contact-heading">Forget Password?</h1>
                  <div className="col-12 contact-input-feild">
                    <input
                      type="text"
                      name="forgetPassword"
                      id="firstName"
                      className="form-control contact-input"
                      placeholder="Enter Your Email ID"
                      style={{width:"500px",marginTop:"50px" ,marginLeft:"120px",boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", border: "1px solid #000", borderRadius: "4px", padding: "12px 20px", resize: "vertical"}}
                      
                  
                    />
                  </div>
                </div>
           
                <div className="row">
                  <div className="col-12">
                  <button
                    type="submit"
                    className="mt-5 btn btn-style"
                    style={{
                        display: "flex", justifyContent: "center", 
                        marginLeft: "320px",
                        marginTop: "140px",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        backgroundColor: "#4CAF50",
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "bold",
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
                        cursor: "pointer",
                    }}
                    >
                    Submit
                    </button>

                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgetPasswordPage;
