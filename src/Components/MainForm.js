import React, { useState } from 'react'
import "../Styles/Form.css"
import {Form, Button} from 'react-bootstrap'
import Axios from "axios"

function MainForm() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        Axios.post("url",{email:email, password:password})
        .then(res=>{
            //setModalShow(true)
            console.log("Submitted Successfully.")
        })
        .catch(err=>{
            console.log(err.message)
            return 
        })
    }

    return (
        <div className="form-container" id="form-container">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={e=>setEmail(e.target.value)}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label >Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={e=>handleSubmit(e)}>
                    Submit
  </Button>
            </Form>
        </div>
    )
}

export default MainForm
