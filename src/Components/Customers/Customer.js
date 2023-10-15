import React from 'react'
import './Customer.css'
const Customer = () => {
  return (
    <div className='customer'>
      <div className='customer-heading'> Customers</div>
      <div className='customer-text'>
        Customers that buy products
      </div>
      <div className='container'>
        <div className='circular-progress'>
            <span className='progress-value'>65%</span>
        </div>
    </div>

    </div>
  )
}

export default Customer
