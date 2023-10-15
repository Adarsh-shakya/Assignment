import React from 'react'
import './Data.css'


const Data = ({img ,heading ,pera, stock, price, total}) => {
  return (
    <div className='data'>
        <div className='left-data'>
            <div className='imgs'>
            <img src={img} alt=''/>
            </div>
            <div className='right-contant'>
                <h4>{heading}</h4>
                <p>{pera}</p>
            </div>
            </div>

            <div className='right-data'>
                <p>{stock} in stock</p>
                <p>$ {price}</p>
                <p>{total}</p>
            </div>
        
        
      
    </div>
  )
}

export default Data
