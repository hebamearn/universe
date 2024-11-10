import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{ height: '300px',backgroundColor:'white' ,width:'100%',margin:'0',marginLeft:'0',padding:'3px'}} className='mt-5 container w-100'>
      <div className='d-flex justify-content-between mt-5 ms-5'>
        <div className="intro" style={{ width: '400px' }}>
          <h5> <i className="fa-brands fa-space-awesome me-3"></i>
            Space Campign</h5>
          <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>
        <div className="d-flex flex-column ">
          <h5>Links</h5>
          <Link to={'/'} style={{ textDecoration: "none", color: 'black' }}>Landing</Link>
          <Link to={'/home'} style={{ textDecoration: "none", color: 'black' }}>Home</Link>
          <Link to={'/history'} style={{ textDecoration: "none", color: 'black' }}>Registration  page</Link>

        </div>
        <div className="d-flex flex-column">
          <h5>Guides</h5>
          <a style={{ textDecoration: 'none', color: 'black' }} href='https://react.dev/' target='_blank'>React</a>
          <a style={{ textDecoration: 'none', color: 'black' }} href='https://reactrouter.com/en/main' target='_blank'>React Router</a>
          <a style={{ textDecoration: 'none', color: 'black' }} href='https://react-bootstrap.netlify.app/' target='_blank'>React Bootstrap</a>
        </div>

        <div className="d-flex flex-coloumn ">
          <h5 >Contact</h5>
          <div className='d-flex ' style={{width:"100%", height:"50px", marginTop:"50px",}}>
            <input placeholder='Enter your email here!!' type='text' className='form-control me-5'  />
            <button className='btn btn-black'><i className='fa-solid fa-arrow-right'></i></button>
          </div>
          <div className='d-flex justify-content-between mt-3' >
            <a href='https://x.com/?lang=en' style={{ textDecoration: 'none', color: 'white' }} target='_blank' ><i className='fa-brands-fa-twitter'></i></a>

          </div>
        </div>
      </div>
      <p className='text-center mt-3'>
        Copyright © 2024 React Bootstrap. Built with Docusaurus.
      </p>
    </div>
  )
}

export default Footer