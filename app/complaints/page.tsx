"use client"

import React, { useState, useEffect, useRef } from 'react'
import Recorder from '@/components/RecorderWebRTC'


const Pageoo = () => {
  const [stream, setStream] = useState(null);
  const audioRef = useRef(null); // For playing back recorded audio

  const recordit = () => {
  }

  const startRecording = async () => {
  };

  const stopRecording = () => {
  };


  return (
    <div className="
      flex
      items-center justify-center
      w-screen
      h-screen
    ">
      <Recorder/>
    </div>
  )
}

export default Pageoo;

/*
      <div className="
        grid grid-rows-2 gap-0 
        w-screen h-35
        justify-center
      ">
        <div>
          <h1> Your very important opinions matter to us. </h1>
        </div>
      <div className=" 
      ">
        <button 
          onClick={startRecording} 
          className="btn btn-wide w-200">record</button>
        <button 
          onClick={stopRecording}
          className="btn btn-wide w-200">stop</button>
      </div>      
      </div>

*/


//import { useRecorder} from 'react-microphone-recorder'
//import { RecordAudio } from 'react-microphone-recorder'


/*
  const { audioLevel, startRecording, pauseRecording, 
      stopRecording, resetRecording, time, audioURL, 
      recordingState, isRecording, audioFile } = useRecorder();
*/
 //const [audioFile, setAudioFile] = (useState < File) | (undefined > undefined)
