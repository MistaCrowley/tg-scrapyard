"use client"

//import { redirect } from 'next/navigation'
//import { revalidatePath } from 'next/cache'
import { useEffect } from 'react'
//import { useRouter } from 'next/router'
import { useRouter } from 'next/navigation'

const pageo = () => {

  const router = useRouter();


  useEffect(() => {
    //console.log('use effect ran')
    
    setTimeout(() => {
      //router.go(-1)
      //router.push('/')
      router.push('https://linktr.ee/trashgodz')
    }, 3000) 

  }, [])

  return (
    <div>
      <h1> an fbi agent will be with you shortly </h1>
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

export default pageo;
