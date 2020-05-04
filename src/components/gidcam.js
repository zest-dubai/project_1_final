import React, { Component } from 'react';
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import '../styles/imagePreview.css';
import ImagePreviewG from './ImgPreviewG';
import { Redirect } from 'react-router-dom';

 
class AppG extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = { dataUri: null,
        view:'',
        camerr: false
    };
    this.onTakePhotoAnimationDone = this.onTakePhotoAnimationDone.bind(this);
  }
 
  onTakePhotoAnimationDone (dataUri) {
    console.log('takePhoto');
    this.setState({ dataUri });
  }
  onCameraError (error) {
    this.setState({
      camerr:true
  })
  localStorage.setItem("t1","e2");
    console.error('onCameraError', error);
  }
 
  render () {
      const { sides } = this.props;
      let views='';
      if(sides === 1 || sides === 2) views='Front Side'
      if(sides === 3) views='Back Side'

      if(this.state.camerr){
        return(  <Redirect to= "/camerr"/>
        );
      }
    return (
      <div >
        {
          (this.state.dataUri)
            ? <ImagePreviewG dataUri={this.state.dataUri} sides={sides} />
            : <div>
                    <Camera onTakePhotoAnimationDone = {this.onTakePhotoAnimationDone} isImageMirror={false} isFullscreen={true}
                            onCameraError = { (error) => { this.onCameraError(error); } }
                            idealFacingMode = {FACING_MODES.ENVIRONMENT}
                    />
                    Click the picture of the {views}            
              </div>
        }
      </div>
    );
  }
}
 
export default AppG;