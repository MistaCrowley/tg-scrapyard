"use client"

//import { redirect } from 'next/navigation'
//import { revalidatePath } from 'next/cache'
import { useState, useEffect } from 'react'
//import { useRouter } from 'next/router'
import { useRouter } from 'next/navigation'

const Pageo = () => {

  const router = useRouter();

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
      router.push('https://linktr.ee/trashgodz')
    }, 3000) 

  }, [])

  return (
    <div className="
      flex
      items-center justify-center
      w-screen
      h-screen
    ">
      <h1 className="
      text-center
      w-300
      h-40
      "> {infoArray[numChoose]}
      </h1>
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
