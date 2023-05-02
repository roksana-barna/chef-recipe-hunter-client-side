import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../Firebase/FirebaseConfig';
const auth = getAuth(app);


const Login = () => {
  const provider= new GoogleAuthProvider();
  const githubProvider =new GithubAuthProvider();
  const {signIn} = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target; ""
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch(error => {
        console.log(error)
      })


    }
    const handleGoogleSignIn=()=>{
      signInWithPopup(auth,provider)
      .then(result=>{
        const user =result.user;
        console.log(user)
      })
      .catch(error=>{
        console.log(error)
      })

    }
    const handleGithubSignIn=()=>{
      signInWithPopup(auth,githubProvider)
      .then(result=>{
        const user = result.user;
        console.log(user)

      })
      .catch(error=>{
        console.log(error)
      })

    }
    return (
      <Container className='w-50 mx-auto mt-5'>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" required />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <br />
          <Form.Text className="text-muted">
            Dont have an account? please<Link to='/register'> Register</Link>
          </Form.Text>
        </Form>
        <Button onClick={handleGoogleSignIn} variant="info mt-5">Sign In With Google</Button>
        <Button  onClick={handleGithubSignIn} variant="info mt-5 ms-2">Sign In With Github</Button>



      </Container>
    );
  };

  export default Login;