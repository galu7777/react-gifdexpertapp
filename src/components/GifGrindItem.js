import React from 'react'

export const GifGrindItem = ({ title, url}) => {


  return (
    <div className='card animate__animated animate__animate__animate__fadeInLeftBig'>
        <img src={url} alt={title}/>
        <p> {title} </p>
    </div>
  )
}
