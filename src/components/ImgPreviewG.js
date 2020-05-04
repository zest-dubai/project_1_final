import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom'
import '../styles/imagePreview.css';
import AppG from './gidcam';
import ClearCache from "react-clear-cache"


 function ImagePreviewG  ({ dataUri, sides, isFullscreen })  {
  let classNameFullscreen = isFullscreen ? 'fullscreen' : '';
  const [val, setVal] = useState(0);
  const [cli, setCli] = useState(0);
  let i = sides;
  let view='';
  if(sides === 1 || sides ===2)
   view= 'Front Side';
   if(sides === 3)
   view= 'Back Side';
  
  function click() {
      
    setCli(true);
    localStorage.setItem("img"+i, JSON.stringify(dataUri));
    localStorage.setItem("tokenG", "abc");
    console.log('Stored' + {sides});
  };

  function retake() {
      console.log('retake..');
      localStorage.setItem("img"+i, '' );
      setVal(true);
  };
  
  if(val)
    {
      return (
        <AppG sides={sides}/>
      );
    }
  else if(cli === true){
        if(sides === 1 || sides === 3)
      return(
        <Redirect to="/success"/>
      );
      if(sides === 2)
      return(
        <AppG sides={sides+1}/>
      );
    }
  else{
  return (      
    <div className={'demo-image-preview ' + classNameFullscreen}><br/>
        <div className= 'heading'>The {view} Preview </div> <br/>
        <img src={dataUri} />
        Your name and photo should be clearly visible
        <button className="btn1" type="button" onClick={click}>LOOKS GOOD</button>
        <button className="btn" type="button" onClick={retake}>RETAKE</button>
    </div>
  );
    }
};

ImagePreviewG.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool
};

export default ImagePreviewG;