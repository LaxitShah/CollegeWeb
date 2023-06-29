import axios from 'axios';
import React, { useEffect, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { headers, token, url } from './MainComponent';
import { CollegeContext } from './MainComponent';




function SearchComp(props) {
    const {
        collegeId, created, Followed, user_id, handleDelete
    } = props;
    const [collegeName, setCollegeName] = useState();
    const [collegeCity, setCollegeCity] = useState();
    const [collegeState, setCollegeState] = useState();
    const [collegeLogo, setCollegeLogo] = useState();
    const [collegeFollowers, setCollegeFollowers] = useState();
    const [isFollow, setIsFollow] = useState();
    const [isHovered, setIsHovered] = useState(false);


    useEffect(() => {
        axios.get(`${url}college/${collegeId}`)
            .then((res) => {
                setCollegeName(res.data.name);
                setCollegeCity(res.data.city);
                setCollegeLogo(res.data.logo);
                setCollegeState(res.data.state);
                setCollegeFollowers(res.data.followers);

                if (Followed && Followed.findIndex(college => college === collegeId) !== -1)
                    setIsFollow(false);
                else
                    setIsFollow(true);
            })
            .catch((err) => alert(err));
    }, []);

  

    function handleFollow() {
        if (user_id) {
            axios.get(`${url}college/${collegeId}/follow`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            })
                .then(res => {
                    console.log(res.data);
                    if (res.data.user.followedColleges.indexOf(collegeId) === -1)
                        setIsFollow(false);
                    else
                        setIsFollow(true);
                    setCollegeFollowers(res.data.college.followers);
                })
                .catch(err => console.log(err));
        }
    }

    return (

        <div className='row' style={{ cursor: "pointer", backgroundColor: "#f5f5f5", padding: "10px", borderRadius: "5px" ,borderBottom:"0px solid #000080",borderTop:"1px solid #000080"}}>
            <Link className='nav-link col-sm-10 col-9 d-flex' to={`/colleges/${collegeId}/`} style={{ textDecoration: "none", color: "black" }}>
                <div className='col-md-2 col-lg-1 col-3 ms-md-2'>
                    <img src={collegeLogo} className='border mx-auto my-auto' style={{ borderRadius: "100%", width: "70px", height: "70px" }} alt="College Logo" />
                </div>
                <div className='text-dark fs-5 ms-lg-3 overflow-hidden'>
                    <b style={{fontSize:"1.4vw"}}>{collegeName}</b>
                    <p style={{fontSize:"1.6vw"}}>{collegeCity}, {collegeState}</p>
                </div>
            </Link>
            {Followed &&
           <div className='col-md-2 col-1 mt-2'>
           {!isFollow ?
             <button onClick={() => { handleFollow(collegeId) }} className='btn   text-capitalize btn-md border ' style={{ backgroundColor: "#000", borderRadius: "5px", color: "#fff",transition: "background-color 0.3s ease",outline:"none",cursor:"pointer", boxShadow: "0 0 3px grey",

            }}>Follow</button> :
             <button onClick={() => { handleFollow(collegeId) }} className='btn   text-capitalize btn-md border ' style={{ backgroundColor: "#000", borderRadius: "5px", color: "#fff",transition: "background-color 0.3s ease",outine:"none", cursor:"pointer", boxShadow: "0 0 3px grey",
           
          
            }}>Following</button>
           }
            <style>
    {`
    @media (max-width: 768px) {
      .btn {
        font-size: 14px;
        padding: 8px 16px;
      }
    }
    @media (max-width: 480px) {
      .btn {
        font-size: 12px;
        padding: 6px 12px;
      }
    }
    `}
  </style>
         </div>
          }
            {created &&
                <div className='col-2 mt-2 ms-auto'>
                    <button style={{ borderTop: 0 }} onClick={() => { handleDelete(collegeId) }} className='btn btn-md btn-danger'>Delete</button>
                </div>
            }
        </div>
    );
}

export default SearchComp;
