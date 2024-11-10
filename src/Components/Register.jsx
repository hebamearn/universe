import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Register = () => {
   
const Submit=()=>{
    alert("Registered Successfully")
}
  return (
    
    <div>
        <h1 className='text-light text-center mt-5'>REGISTER HERE!</h1>
        <div className="Form">
        <Form className='text-light bg-dark border border-rounded-3 p-3'>
      <Form.Group className="mb-3" controlId="formBasicName">
      <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={Submit}>
        Submit
      </Button>
    </Form>
        </div>
    </div>
  )
}

export default Register