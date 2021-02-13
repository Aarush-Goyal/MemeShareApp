import React from 'react'
import '../Meme/Meme.css'

const Meme = ({ name, caption, imageUrl}) => {
    return (
        <div className='meme'>
            <h1 className='name'>{name}</h1>
            <h2 className='caption'>{caption}</h2>
            <img src={imageUrl} />
        </div>
    )
}

export default Meme
