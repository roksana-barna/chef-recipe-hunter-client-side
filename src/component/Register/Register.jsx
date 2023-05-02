import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
  const {createUser}=useContext(AuthContext)
    const handleRegister=(event)=>{
        event.preventDefault();
        const form =event.target;
        const name=form.name.value;
        const photoURL=form.photoURL.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,photoURL,email,password);
        createUser(email,password)
        .then(result =>{
          const createdUser=result.user;
          console.log(createdUser);
          form.reset();
    })
    .catch(error =>{
      console.log(error)
    })
  }
    return (
        <div>
               <Container className='w-50 mx-auto mt-5'>
        <Form onSubmit={handleRegister}>
 <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>Name</Form.Label>
   <Form.Control type="text" name='name' placeholder="Enter Name" required/>

 </Form.Group>
 <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>Email address</Form.Label>
   <Form.Control type="email" name='email' placeholder="Enter email"required />

 </Form.Group>

 <Form.Group className="mb-3" controlId="formBasicPassword">
   <Form.Label>Password</Form.Label>
   <Form.Control type="password" name='password' placeholder="Password"required />
 </Form.Group>
 <Form.Group className="mb-3" controlId="formBasicEmail">
   <Form.Label>Photo URL</Form.Label>
   <Form.Control type="photoURL" name='photoURL' placeholder="Enter Photo url"required />

 </Form.Group>
 <Form.Group className="mb-3" controlId="formBasicCheckbox">
   <Form.Check type="checkbox" label="Check me out" />
 </Form.Group>
 <Button
  variant="primary" type="submit">
   Register
 </Button>

</Form>
<Form.Text className="text-muted">
     Already have an account? please<Link to='/login'> Login</Link>
   </Form.Text>


   </Container>
            
        </div>
    );
};

export default Register;