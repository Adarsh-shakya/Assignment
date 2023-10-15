import React from 'react'
import './Overview.css'
import Month from '../Month/Month'

const Overview = () => {
  const AllMonth=[
    {month:"jan", height:"34vh",  backgroundColor:"gainsboro"},
    {month:"feb", height:"30vh",  backgroundColor:"gainsboro"},
    {month:"mar", height:"20vh"  ,backgroundColor:"gainsboro"},
    {month:"apl", height:"18vh"  ,backgroundColor:"gainsboro"},
    {month:"may", height:"25vh"  ,backgroundColor:"gainsboro"},
    {month:"jun", height:"21vh"  ,backgroundColor:"gainsboro"},
    {month:"jul", height:"11vh"  ,backgroundColor:"gainsboro"},
    {month:"aug", height:"35vh"  ,backgroundColor:"navy"},
    {month:"sep", height:"15vh"  ,backgroundColor:"gainsboro"},
    {month:"oct", height:"20vh"  ,backgroundColor:"gainsboro"},
    {month:"Nov", height:"20vh"  ,backgroundColor:"gainsboro"},
    {month:"dec", height:"30vh"  ,backgroundColor:"gainsboro"},

   ]

  return (
    <div className='overview'>
        <div className='overview-header'>
            <div className='div-1'>
                <div className='overview-heading'>Overview</div>
                <div className='overview-text'>Monthly Earning</div>
            </div>
            <div className='div-2'>
                Quarterly
            </div>
        </div>
        <div className='months'>
          {
             AllMonth.map((data) => (
              <Month month={data.month} height={data.height}  backgroundColor={data.backgroundColor}/>
            ))
          }
          
          
        </div>
      
    </div>
  )
}

export default Overview
