// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client"

//import { redirect } from 'next/navigation'
//import { revalidatePath } from 'next/cache'
import { useState, useEffect } from 'react'
//import { useRouter } from 'next/router'
//import { useRouter } from 'next/navigation'

const Pageo = () => {

  //const router = useRouter();

  const [infoArray, setInfoArray] = useState([
    " ",
    "an FBI agent will be with you shortly",
    "don't look now, it's right behind you",
    "downloading nsfw material, please hold",
    "opening camera, please wait",
    "did you mean to give us your social security number?"
    ])  

  const [numChoose, setNumChoose] = useState(0)

  useEffect(() => {
    setNumChoose(
      Math.floor( Math.random() * ((infoArray.length-1) - 1 + 1)) + 1
      )

  }, [])

  useEffect(() => {
    
    setTimeout(() => {
      //router.go(-1)
      //router.push('/')
      console.log("now redirect")
      //router.push('https://linktr.ee/trashgodz')
      //router.push('yggdrasil')
    }, 6000) 

  }, [])

  return (
    <div className="
      flex w-screen h-screen 
      items-center justify-center
      grid
      ">
      <div className="
        grid 
        grid-rows-2 gap-0
         justify-center
        w-screen
        h-20
      ">
          <div className="w-full grid justify-center">
                  <span className="
                  loading loading-infinity loading-xl text-mint-500
                  "></span>
          </div>
          <div className="">
            <h1 className="
            text-center
            w-full
            "> 
            {infoArray[numChoose]}
            </h1>
          </div>
      </div>
    </div>
  )
}



/*
export default function Home() {
  return (
    <div>
      <h1> heado </h1>

    </div>
  );
}

*/

export default Pageo;
