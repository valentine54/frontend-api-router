import React from 'react'
import axios from 'axios'; 
import{ useState } from 'react';

function Home() {
  // fetch("https://catfact.ninja/fact").then((res) => res.json()).then((data) => console.log(data));
  const [catFact, setCatFact]= useState("")
  const handleClick= (e)=>{
    e.preventDefault()  // prevents continius reloading 
   axios.get("https://catfact.ninja/fact")
    .then((res)=>{
      setCatFact(res.data.fact)
    })

  }
  return (
    <div>
      <h1>Home page</h1>
      <button
       onClick={handleClick}
       className='!bg-green-200'
      >
        Get a Cat Fact</button>
      <p className='text-red'>{catFact}</p>
    </div>
  )
}

export default Home
 