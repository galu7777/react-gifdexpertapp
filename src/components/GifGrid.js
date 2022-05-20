import React, {useState, useEffect} from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGrindItem } from './GifGrindItem';


export const GifGrid = ({category}) => {


    const {data:images, loading} = useFetchGifs(category);

  return (
    <>
        <h3 className='animate__animated animate__animate__animate__fadeInLeftBig'>{category}</h3>

        {loading && <p className='animate__animated animate__animate__animate__flash'>Loading</p>}

        <div className='card-grid'>
            
            
            {
            images.map( img => (
                <GifGrindItem
                        key={img.id}
                        {...img}
                        />
            ))
            }
            
        </div>
    </> 
  )
}
