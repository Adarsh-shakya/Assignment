import React from 'react'
import './Month.css'

const Month = ({ month ,height, backgroundColor}) => {
    const style={
        height,
        backgroundColor
      }
  return (
    <div  className='month' >
      <div className='range' style={style}></div>
      <p>{month}</p>
    </div>
  )
}

export default Month
