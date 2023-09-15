import React from 'react'
const LoaderImage = require("../assets/images/loader.gif")

export default function Loader() {
    return (
        <div className='absolute w-screen h-screen top-0 left-0 z-1000 bg-white flex align-center items-center justify-center'>
            <img src={LoaderImage} alt="Loader" />
        </div>
    )
}
