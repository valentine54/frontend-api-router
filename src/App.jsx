import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Profile from './Components/Profile'
import NotFound from './Components/NotFound'
import Animation from './Components/Animation'
import Lime from './Components/Lime'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/animation' element={<Animation 
            text="Customize me"
            speed={100}
            maxIterations={20}
            characters="ABCD1234!?"
            className="revealed"
            parentClassName="all-letters"
            encryptedClassName="encrypted"/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/lime' element={<Lime/>}/>
      </Routes>
    </div>
  )
}

export default App
