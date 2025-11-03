"use client"

//import { redirect } from 'next/navigation'
//import { revalidatePath } from 'next/cache'
import { useState, useEffect } from 'react'
//import { useRouter } from 'next/router'
import { useRouter } from 'next/navigation'

const Pageoo = () => {
  const router = useRouter();
  const linktree = () => {
    router.push('https://linktr.ee/trashgodz')
  }
  const doComplaints = () => {
    router.push('/complaints')
  }
  return (
    <div className="
      flex
      items-center justify-center
      w-screen
      h-screen
    ">
      <div className="
        grid grid-rows-2 gap-0 
        w-screen h-35
        justify-center
        bg-red-200
      ">
      <div className=" 
      ">
        <button 
          onClick={linktree}
          className="btn btn-wide w-200">cool stuff</button>
      </div>
      <div>
        <button 
          onClick={doComplaints}
          className="btn btn-wide w-200">complaints</button>
      </div>
      <div>
        <button className="btn btn-wide w-200">suggestions</button>
      </div>      
      </div>
    </div>
  )
}

export default Pageoo;
