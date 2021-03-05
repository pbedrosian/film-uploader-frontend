import React from 'react';
import S3FileUpload from 'react-s3'

const config = {
    bucketName: 'myfilmphotobucket',
    // dirName: 'Enter Folder Name ', /* optional */
    region: 'us-east-1',
    accessKeyId: 'AKIAI7FKA2XGDWFXRLVQ',
    secretAccessKey: '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'
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