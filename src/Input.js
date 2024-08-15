import React from 'react'
import  { useState } from 'react';
const Input = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
      });
      const handleinput=(e)=>{
        setFormData({...formData,[e.target.name] : e.target.value})
      }
  return (
    <div>
<from>
    <label>name</label>
    <input type='text' name='name' onChange={handleinput}/>
    <label>email</label>
    <input type='text' name='email' onChange={handleinput}/>
    <label> password</label>
    <input type='text' name=' password' onChange={handleinput}/>
</from>
    </div>
  )
}

export default Input