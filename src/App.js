import React from 'react';
import UploadComponent from './uploadComponent';
import { connect } from 'react-redux'

 
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
