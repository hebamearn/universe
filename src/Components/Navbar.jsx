import React from 'react'
import Nav from 'react-bootstrap/Nav';
const Navbar = () => {
  return (
    <div className='d-flex w-100'>
 <Nav variant="tabs" defaultActiveKey="/home" className='w-100 bg-dark'>
 <Nav.Item>
        <Nav.Link href=""><i className="fa-brands fa-space-awesome"></i></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/home" className='ms-5'>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1" className='ms-5'>Register</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link eventKey="link-1" className='ms-5'>
          <input type="text" style={{borderRadius:'20px',width:'50vh',marginLeft:'100%',textAlign:'left'}} placeholder='search here!'/>
        </Nav.Link>
      </Nav.Item>
     
    </Nav>

    </div>
  )
}

export default Navbar