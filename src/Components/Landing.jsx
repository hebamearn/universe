import React from 'react'
import universe from '../assets/earth.jpg'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';






const Landing = () => {
   
  
  return (
    <div className='container' style={{textAlign:'center'}}>
      <h2 className='text-light mt-5 ' >THE FUTURE BEGINS HERE!!!</h2>
<img src={universe} alt="no img" className='w-100 h-100' />
<div className="d-flex">
<Link to={'/home'} className='btn btn-light mt-3'  ><i className="fa-solid fa-angles-right me-3 mt-2"></i>Get started</Link>
</div>


    </div>
  )
}

export default Landing