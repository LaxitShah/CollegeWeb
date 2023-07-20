import React, { useState } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle, Button, Input } from 'reactstrap';
import { url, headers } from './MainComponent';
import {axios,Axios} from 'axios';

function Academics(props) {
  const { collegeId, delComp, id, courseDescription, fees, imageUrl, duration, courseName, isAdmin } = props;
  const [imgUrl, setImgUrl] = useState(imageUrl);
  const [title, setTitle] = useState(courseName);
  const [description, setDescription] = useState(courseDescription);
  const [fee, setFees] = useState(fees);
  const [durations, setDuration] = useState(duration);
  const [isEditClick, setIsEditClick] = useState(false);
  const [Uploading, setUploading] = useState(false);

  const saveComp = () => {
    const academics = {
      courseName: title,
      courseDescription: description,
      fees: fee,
      imageUrl: imgUrl,
      duration: durations
    };
    axios
      .put(`${url}college/${collegeId}/academics/${id}`, academics, { headers: headers })
      .then((res) => {
        setImgUrl(res.data.imageUrl);
        setDescription(res.data.courseDescription);
        setDuration(res.data.duration);
        setFees(res.data.fees);
        setTitle(res.data.courseName);
        setIsEditClick(false);
      })
      .catch((err) => console.log(err));
  };

  const goback = () => {
    setImgUrl(imageUrl);
    setDescription(courseDescription);
    setDuration(duration);
    setFees(fees);
    setTitle(courseName);
  };

  async function uploadFile(file) {
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "kfm1ji7h");
    formData.append("folder", "/Academics");
    await Axios.post("https://api.cloudinary.com/v1_1/dmkfgsff7/image/upload", formData)
      .then((res) => {
        setUploading(false);
        setImgUrl(res.data.secure_url);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        setUploading(false);
      });
  }

  return (
    <div className='row mx-auto mt-5'>
      <div className='col-6'>
        {isEditClick ? <Input type="file" onChange={(e) => uploadFile(e.target.files[0])} /> : ""}
        <CardImg className='mx-auto' width={"90%"} height={"380px"} src={imgUrl} />
      </div>
      <div className='col-5'>
        <div className='row'>
          {!isEditClick ? <CardTitle className='col-10 h2'>{title}</CardTitle> :
            <Input style={{ height: "40px" }} className='col-10' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
          }
          {isAdmin ? <div className='mx-auto col-2'>
            {!isEditClick ?
              <>
                <Button color="primary" onClick={() => setIsEditClick(true)}>Edit</Button>
                <Button color="danger" onClick={() => goback()}>Cancel</Button>
              </>
              :
              <>
                <Button color="success" onClick={() => saveComp()}>Save</Button>
                <Button color="danger" onClick={() => setIsEditClick(false)}>Cancel</Button>
              </>
            }
          </div> : ""}
        </div>
        {!isEditClick ?
          <div height={"290px"}>{description}</div> :
          <Input type="textarea" cols={40} value={description} onChange={(e) => setDescription(e.target.value)} rows={5} width="100%" />
        }

        <div className='row my-5 me-5 border'>
          <span className='my-2 ms-2 col-6 row'>
            <h4 className='col-12'>Fees : </h4>
            {!isEditClick ? <>
              <h4>{fee}</h4></> :
              <Input onChange={(e) => setFees(e.target.value)} value={fee} type="text" />
            }
          </span>
          <div className='my-2 ms-2 col-6 row'>
            <h4 className='col-12'>Duration: </h4>
            {!isEditClick ? <>
              <h4>{durations} {duration == 1 ? "Year" : "Years"}</h4>
            </> :
            <div style={{marginTop:"10px"}}> 

              <Input  onChange={(e) => setDuration(e.target.value)}
                type="number" min={1} max={7} value={durations} />
          </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Academics;
