//import Swal from 'sweetalert2'
import React,{useState} from "react"
import axios from "axios";
import './Login.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Swal.fire({
//     title: 'Error!',
//     text: 'Do you want to continue',
//     icon: 'error',
//     confirmButtonText: 'Cool'
//   })
  
function Login() {

  const[email , setEmail] = useState("")
  const[password , setPassword] = useState("")

  const handleLogin = async () => {
  const response = await axios.post("https://apingweb.com/api/login", {
  method :  "POST",
  body: JSON.stringify({
    "email":"superman@gmail.com",
    "password":"123456"
}),
  headers: {
    "Content-Type" : "application/json"
  }
})
const jsonResponse = await response.json();
console.log(jsonResponse)
  }



  return (
    <div className='Login-logo'>
        <img src="../Icons/Group 18.svg" alt='error'/>
          <h2>NIFTY</h2>
          <Button className="register-button" variant="outline-secondary">Register</Button>
    <Form className='Form'>
      <Form.Group className="email">
        <Form.Label style={{fontSize:25}}>Email</Form.Label>
        <Form.Control className='bars-email' type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="password">
        <Form.Label style={{fontSize:25}}>Password</Form.Label>
        <Form.Control className='bars-password' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <Button onClick = {handleLogin} className="button" variant="outline-dark">Login</Button>
      </Form>
      </div>
  )
}

export default Login