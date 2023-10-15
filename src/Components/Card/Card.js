import React from 'react'
import './Card.css'

const Card = ({heading ,price ,rate ,icon ,backgroundColor}) => {
  const style={
    backgroundColor
  }
  return (
    <div className='card'>
      <div className='CardIcon'style={style}>
      <i class={icon}></i>
      </div>
      <div className='CardContain'>
        <p className='heading'>{heading}</p>
        <p className='price'>${price}K</p>
        <p className='rate'> <span className='rateColor'>{rate}%</span> this month</p>
      </div>
    </div>
  )
}

export default Card
