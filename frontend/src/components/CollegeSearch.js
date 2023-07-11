import axios from 'axios';
import React, { useEffect, useState, useRef, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import College from './College';
import { url } from './MainComponent';
import SearchComp from './SearchComp';
import '../CSS/search.css';
import { Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { CollegeContext } from './MainComponent';


function CollegeSearch({ ishome }) {
    // const [search,setSearch]=useState("");
    const ref = useRef();

    const [data, setData] = useState()
    const [isMenuOpen, setIsMenuOpen] = useState(true)
    const [name, setName] = useState("")

    const { setReload } = useContext(CollegeContext)

    useEffect(() => {
        const checkIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isMenuOpen])

    useEffect(() => {
        fetchData()
    }, [name])

    const fetchData = () => {
        // setSearch(e.target.value);
        axios.post(`${url}college/search`, { name: "k.s" })
            .then(res => {
                setData(res.data)
                console.log(res)
            })
            .catch(err => console.log(err))
    }
    return (
        // <div>

        // </div>
        <>
       
                    <div className=' w-50 ' ref={ref}>
                        {/* <Input className='form-control search-margin-left'  type="text" value={name}
                            onChange={(e) => { setName(e.target.value); }} onFocus={() => setIsMenuOpen(true)} placeholder="Search College" /> */}
                        {data &&  

                        
                            <div className=' '>
                                {data.map(college => {
                                    return (
                                        <div className='row mt-2' style={{ cursor: "pointer" }} >

                                            <Link className='nav-link  col-10 d-flex' onClick={() => {  }} to={`/colleges/${college._id}`}>

                                                <div className='col-md-2 col-lg-1 col-3 ms-md-2' >
                                                    <img src={college.logo} className='borde mx-auto my-auto' style={{ borderRadius: "100%", width: "50px", height: "50px" }} />
                                                </div>
                                                <div className='text-dark fs-6 ms-lg-3 overflow-hidden' >

                                                    <b className='overflow-hidden'>{college.name}</b>
                                                    <p>{college.city},{college.state}</p>

                                                </div>
                                            </Link>
                                        </div>
                                    )
                                    // return <SearchComp key={college._id} collegeId={college._id} />
                                })}
                            </div>
                        }
                    </div>
                    


            
        </>

    );
}


export default CollegeSearch;
