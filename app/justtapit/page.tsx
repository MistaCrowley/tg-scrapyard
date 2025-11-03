"use client"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

  const _precision = 5;
  let _bpm = 0;
  let _taps = [];

const Pageoo = () => {
  
  const [currentBpm, setCurrentBpm] = useState(0)

  const doTap = () => {
    _taps.push( Date.now())
    calcBPM()
  }

const calcBPM = () => {
  let ticks = [];

  if (_taps.length >= 2) {
    
    for (let i = 0; i < _taps.length; i++) {
      if (i >= 1) {
        // calc bpm between last two taps
        ticks.push( Math.round( 60 / (_taps[i] / 1000 - _taps[i-1] / 1000) * 100) / 100 );
      }
    }
  }
  
  if (_taps.length >= 24) {
    _taps.shift();
  }
  
  if (ticks.length >= 2) {
    
    let current_bpm = getAverage(ticks, _precision);
    //let sample = getAverage(ticks, _precision);
    // if (_taps.length >= _precision + 3) {     
    //   if (current_bpm % 2 == 1) current_bpm = getAverage(ticks, _precision + 1);
    //   if (current_bpm % 2 == 1) current_bpm = getAverage(ticks, _precision + 2);
    //   if (current_bpm % 2 == 1) current_bpm = getAverage(ticks, _precision + 3);
    // }
    
    // if (_bpm == 0 || _bpm - current_bpm >= 10) {
    //   _bpm = current_bpm;
    // }
    
    _bpm = current_bpm;
    setCurrentBpm(Math.round(_bpm))
  }
}

const getAverage = (Values, Precision) => {
  let ticksInside = Values;
  let n = 0;
  
  for (let i = ticksInside.length-1; i >= 0; i--) {
    n += ticksInside[i];
    if (ticksInside.length - i >= Precision) break;
  }
  let outty = n / _precision

  return outty
}


  return (
    <div className="
      flex
      items-center justify-center text-center
      grid grid-rows-10
      gap-20
      w-screen
      h-screen
      pt-50
    ">

    <div className=""

    >
      <h1> {currentBpm} </h1>
    </div>
    <button className="
      h-20
      w-150
      bg-pink-300 
      hover:bg-pink-500
      active:bg-green-500
      rounded-xl
    "
    onClick={() => doTap()}
    >
    TAP ME ZADDY
    </button>

    </div>
  )
}

export default Pageoo;
