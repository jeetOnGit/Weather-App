import React from 'react'
import '../compsCss/mainTemp.css'
import '../compsCss/overallToday.css'

export default function MainTemp(props) {
  return ( 
    <>
      <div className="overallTemp font-bold">
        <h1 className='text-8xl' id="overAll">{props?.data?.main?.feels_like}&deg;</h1>
        <h2 className='text-4xl ml-' id='overallType'>{props?.data?.weather[0]?.description}</h2>
      </div>
    </>
  )
}
