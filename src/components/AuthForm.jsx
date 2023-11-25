import React, { Fragment , useState } from 'react'
import Button from './Button'
import Input from './Input'
import axios from 'axios'
// import  {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
// import { auth } from '../firebase'
// import user from '../model/user.jsx'
// import { collection, addDoc } from "firebase/firestore"; 
// import { db } from '../firebase'

const AuthForm = ({signup }) => {
  const [firstName , setFirstName]=useState();
  const [lastName ,setLastName]=useState();
  const [email,setEmail]=useState();
  const[password,setPassword]=useState();
    
  // const auth =getAuth();
  const register= async()=>{ 
    if(signup){
      axios.post("http://localhost:8081/",{
        fname : firstName,
        lname : lastName,
        email:email,
        password : password
      }).then((res)=>{
        console.log(fname)
      })

      console.log("signup");

    }else
    console.log("login")
    // console.log(user)
  }
  const login=async()=>{ }
  return (
    <div className='form'>
        {signup && <> 
        <Input  icon="fa-solid fa-user" type="text" placeholder="first name "
        onChange={(e)=>{
          setFirstName(e.target.value)
        }}/>
      <Input icon="fa-solid fa-user" type="text" placeholder="last name "
      onChange={(e)=>{
        setLastName(e.target.value)
      }}/>
      </>}
      <Input icon ="fa-solid fa-envelope" type="email" placeholder="enter email"
      onChange={(e)=>{
        setEmail(e.target.value)
      }}/>
      <Input icon="fa-solid fa-lock" type="password" placeholder="enter password"
      onChange={(e)=>{
        setPassword(e.target.value)
      }}/>
      <Button value={`${!signup ? 'Log in' : 'Sign up'}` } onClick={register} />
    </div>
  )
}

export default AuthForm
