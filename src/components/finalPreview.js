import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom'
import '../styles/imagePreview.css';
import AppG from './gidcam';


 function FinalPreview  ({ dataUri, sides, isFullscreen })  {
  let classNameFullscreen = isFullscreen ? 'fullscreen' : '';

  //const { sides } = this.props;
  const [val, setVal] = useState(0);
  const [cli, setCli] = useState(0);
  let i = sides;
  let view='';
  if(sides === 1)
   view= 'Front Side';
   if(sides === 2)
   view= 'Back Side';
  
  function click() {
      
    setCli(true);
    localStorage.setItem("img"+i, JSON.stringify(dataUri));
    console.log('Stored' + {sides});
  };

  function retake(){
      console.log('retake..');
      localStorage.setItem("img"+i, '' );
      setVal(true);
      
      /*return(
        // doubt-  to take it back to camera page    
        <Redirect to="/login"/>
      ); */
  };
  
  if(val)
    {
      return (
        <AppG sides={sides}/>
      );
    }
    else if(cli === true){
      return(
        <Redirect to="/success"/>
      );
    }
    else{
  return (      

    // if(this.retake === true)
    //true ? <Redirect /> : <div></div>

    <div className={'demo-image-preview ' + classNameFullscreen}>
       The {view} preview <br/> <br/>
      <img src={dataUri} />
      <button type="button" onClick={click}>Submit</button>
      <button type="button" onClick={retake}>Retake</button>
    </div>
  );
    }
};

ImagePreviewG.propTypes = {
  dataUri: PropTypes.string,
  isFullscreen: PropTypes.bool
};

export default FinalPreview;