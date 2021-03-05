import React from 'react';
import S3FileUpload from 'react-s3'

const API_KEY = process.env.REACT_APP_ACCESS_KEY_ID;
const SECRET_KEY = process.env.REACT_APP_SECRET_ACCESS_KEY;


const config = {
    bucketName: 'myfilmphotobucket',
    // dirName: 'Enter Folder Name ', /* optional */
    region: 'us-east-1',
    accessKeyId: {API_KEY},
    secretAccessKey: {SECRET_KEY}
}

const upload = (e) =>{
    S3FileUpload.uploadFile(e.target.files[0], config)
    .then((data)=> {
      console.log(data.location)
    })
    .catch((err)=>{
      alert(err)
    })
  }

const UploadComponent = () => {
    return (
        <div>
            <input type='file' onChange={upload} />
        </div>
    );
};

export default UploadComponent;