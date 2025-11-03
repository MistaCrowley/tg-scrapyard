/*
built from:
https://www.youtube.com/watch?v=Yy4uDqTYXqo

 test browser recorder capability
 https://webrtc.github.io/samples/src/content/getusermedia/record/

had to downgrade react-media-recorder to version 1.6.2 
otherwise "worker undefined" when trying to import 
https://github.com/DeltaCircuit/react-media-recorder/issues/144

*/

'use client'
import {useState, useRef, useEffect} from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { useRouter } from 'next/navigation'

export default function Recorder() {

	const [mediaType, setMediaType] = useState("video")

	const {status,
		startRecording,
		stopRecording,
		mediaBlobUrl,
		previewStream
	} = useReactMediaRecorder({
		video:mediaType === 'video' ? true : false,
		audio:true,
		screen:mediaType === 'screen' ? true : false,
		onStop:(blobUrl) => console.log("recording stopped", blobUrl)
	})
	useEffect(()=> {
		console.log(`media type changy ${mediaType}`)
	}, [mediaType])
	useEffect(() => {
		console.log(`recording started ${startRecording}`)
	}, [startRecording])
	return (
		<div className="w-full h-full ">
			<h1 className="text-center mb-4"> Webrtc recordo </h1>
			<div className="mb-4 w-[90vw] h-[5vh] 
				grid grid-cols-3 gap-10
			">
				<button className="h-[4vh] bg-blue-500 rounded-[.5vw]"
					onClick={() => setMediaType('video')}
				>
					Video
				</button>
				<button className="h-[4vh] bg-blue-500 rounded-[.5vw]"
					onClick={() => setMediaType('audio')}
				>
					Audio
				</button>
				<button className="h-[4vh] bg-blue-500 rounded-[.5vw]"
					onClick={() => setMediaType('screen')}
				>	
					Screen captua
				</button>
			</div>
			<div className="w-full h-[5vh] text-center">
					<h2>Status: {status} </h2>
			</div>
			<div className="w-full h-5vh text-center
				grid grid-cols-2 gap-10
			">
				<button className="h-[4vh] bg-green-500 rounded-[.5vw]" 
					onClick={startRecording}
					disabled={status === "recording"}
				>
					record
				</button>
				<button className="h-[4vh] bg-red-500 rounded-[.5vw]" 
					onClick={stopRecording}
					disabled={status !== "recording"}
				>
					stop
				</button>
			</div>
				{mediaBlobUrl && (
				<div>
					<h2> ur video </h2>
					<a href={mediaBlobUrl} download="thethingo.webm">
						<button className="h-[4vh] bg-green-500 rounded-[.5vw]">
							download it
						</button>
					</a>
					<video src={mediaBlobUrl} controls> </video>
				</div>
				)}
			
			{previewStream && (
				<div>
					<video
						ref={(ref) => {
							if (ref) {
								ref.srcObject = previewStream;
							}
						}}
						autoPlay
						muted
						playsInline
						width="100%"
					>
					</video>	
				</div>
			)}
		</div>
		)
}

