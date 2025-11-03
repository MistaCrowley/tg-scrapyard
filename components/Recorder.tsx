/*
 test browser recorder capability
 https://webrtc.github.io/samples/src/content/getusermedia/record/
*/

'use client'
import {React, useState, useRef} from "react";

export default function Recorder() {
	
  const [isRecording, setIsRecording] = useState(false)
  const [recordedURL, setRecordedURL] = useState('')
  const [seconds, setSeconds] = useState(0)

  const mediaStream = useRef(null)
  const mediaRecorder = useRef(null)
  const chunks = useRef([])

  const startRecording = async() => {
  	setIsRecording(true)
  	try {
	  	setSeconds(0)
	  	const constraints = { audio:true, video: false}
	  	const stream = await navigator.mediaDevices.getUserMedia(constraints)
	  	//const stream = await navigator.mediaDevices.getUserMedia({audio: true})
	  	mediaStream.current = stream   
	  	mediaRecorder.current = new MediaRecorder(stream)
	  	mediaRecorder.current.ondatavailable = (e) => {
	  		if (e.data.size > 0) {
	  			chunks.current.push(e.data)
	  		} 
	  	}
	  	const timer = setInterval(() => {
	  		setSeconds(prev => prev + 1) 
	  	}, 1000)

	  	mediaRecorder.current.onstop = () => {
	  		console.log("stopping recording")
	  		const recordedBlob = new Blob(chunks.current, {type: 'audio/mp3'})
	  		console.log(recordedBlob)
	  		const url = URL.createObjectURL(recordedBlob)
	  		setRecordedURL(url)

	  		chunks.current = [] //clear the chunks to prepare for next recording 
	  		clearTimeout(timer)
	  	}

	  	mediaRecorder.current.start(1000)

  	} catch(error){
  		console.log(error)
  	}

  }
  const stopRecording = () => {
  	setIsRecording(false)
  	if(mediaRecorder.current) {
  		mediaRecorder.current.stop()
  		mediaStream.current.getTracks().forEach(track => track.stop())
  	}
  }
  const formatTime = (totalSeconds) => {
  	const hours = Math.floor(totalSeconds / 3600)
  	const minutes = Math.floor((totalSeconds  % 3600)/60)
  	const secs = totalSeconds % 60

  	return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(1,"0")}:${String(secs).padStart(2,"0")}`
  }


	return (
			<div className='w-full h-screen flex flex-col items-center
				justify-center bg-green-500
			'>
				<h2 className='
					text-[100px] text-white bg-blue-200 p-4 rounded-lg mx-4
				'>
					{formatTime(seconds)}
				</h2>
				{isRecording ? 
					<button className='
					flex items-center justify-center
					text-[60px] bg-red-500 rounded-full
					p-4 text-white w-[100px] h-[100px]
					'
					onClick={stopRecording}
					>
					Stop
					</button> :
					<button className='
					flex items-center justify-center
					text-[60px] bg-red-500 rounded-full
					p-4 text-white w-[100px] h-[100px]
					'
					onClick={startRecording}
					>
					Record
					</button>
				}
				{recordedURL && <audio controls src={recordedURL} />}
			</div>
		)
}

