import React from 'react'



const initialFormValues = {
    name: "",
    email: "",
    message: "",
  };
  
  const initialFormErrors = {
    name: "",
    email: "",
    message: "",
  };



export default function Contact() {
    return (
        <div>
            <label htmlFor='name'>Name</label>
            <div>
                <input
                    id='name'
                    name='name'
                    type='text'
                    
                    onChange={change}
                    onBlur={validate}
                    required
                ></input>
            </div>
        </div>
    )
}
