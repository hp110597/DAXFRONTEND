import React from 'react'

export default function header() {
  return (
    <>
    <div className="header" >
      <div className="flex justify-between items-center" style={{ backgroundColor: "#1E1E1E" }}>
        <div className="logo">
          <img className="ml-7 my-3" src="/images/logo.png" alt="..." />
        </div>
        <div className="navbar">
          <a href="#" className="mx-7 text-white">
            Production collection
          </a>
          <a href="#" className="mx-7 text-white">
            About artist
          </a>
          <a href="#" className="mx-7 text-white">
            About brand
          </a>
          <a href="#" className="mx-7 text-white">
            Contact us
          </a>
        </div>
      </div>
      <div className="introduce">
      <iframe
        style={{width:'100vw'}}
        height={500}

        src="https://www.youtube.com/embed/HePO4DWDDq8"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
    </div>
   
  </>

  )
}
