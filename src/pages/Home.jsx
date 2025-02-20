import React from 'react'
import { myRouter } from '../router'
import { RouterProvider } from 'react-router-dom'

function Home() {
  return (
    <div>
      <RouterProvider router={myRouter}/>
    </div>
  )
}

export default Home
