import React from 'react';
import ImageUploader from 'react-images-upload';
import S3FileUpload from 'react-s3'
import UploadComponent from './uploadComponent';
 
class App extends React.Component {

    render() {
        return (
          <div>
            <UploadComponent />
          </div>
        );
    }
}

export default App;
