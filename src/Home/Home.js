import React from 'react'
import LeftSideBar from '../Components/LeftSideBar/LeftSideBar.js'
import './Home.css'
import HomeMainBar from '../Components/HomeMainBar/HomeMainBar.js'


export default function Home() {
  return (
    <div className="home-container-1">
            <LeftSideBar/>
            <div className="home-container-2">
             <HomeMainBar/>
            </div>
        </div>
  )
}
