import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom'
import './styles/imagePreview.css';
import App3 from './cameraSelfie';


 function ImagePreview  ({ dataUri, isFullscreen })  {
  let classNameFullscreen = isFullscreen ? 'fullscreen' : '';

  const [val, setVal] = useState(0);
  const [cli, setCli] = useState(0);
  function click() {
      setCli(true);
      localStorage.setItem("img", JSON.stringify(dataUri));
      localStorage.setItem("tokenS", "abc")
      console.log('Stored');
  };

  function retake(){
      console.log('retake..');
      localStorage.setItem("img", '' );
      setVal(true);
  };
  
  if(val)
    {
      return (
        <App3/>
      );
    }
    else if(cli === true){
      return(
        <Redirect to="/gid"/>
      );
    }
    else{
        return (
          <div className={'demo-image-preview ' + classNameFullscreen}>
            <br/>
              <div className= 'heading' > <b>PREVIEW</b></div><br/>
              <img src={dataUri} /> <br/>
              <button className="btn1" type="button" onClick={click}>LOOKS GOOD</button>
              <button className="btn" type="button" onClick={retake}>RETAKE</button>
          </div>
              );
        }
  };

ImagePreview.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool
};

export default ImagePreview;