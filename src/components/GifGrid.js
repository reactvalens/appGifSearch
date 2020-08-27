import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import React, { useState, useEffect } from 'react'
 import { GifGridItem } from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );  

    return (
        <>
        <h3 className="animate__animated animate__bounce animate__fadeIn">{ category }</h3> 
        
        { loading && <p className="card animate__animated animate__bounce animate__flash">Loading</p> }

        <div className="card-grid">                       
            {
                images.map( img => (
                    <GifGridItem
                        key = {img.id}
                        //img = {img}
                        { ...img }
                    />
                    // <li key={img.id}>{img.title}</li>
                ))
            }                                        
        </div>
        </>
    )
}
