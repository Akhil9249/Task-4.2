import React, { useState } from 'react'
import './Form.css'

function Form() {

  let [value,setValue] = useState({
      name:false,
      email:false,
      gender:false,
      language:false
  })
  const validOnchange = (event)=>{
      setValue((prev)=>({
        ...prev,
        [event.target.name]:event.target.value
      }))
  }

  const validBlur = (event)=>{
    setValue((prev)=>({
      ...prev,
      [event.target.name]:event.target.value
    }))
}

const validSubmit = (event)=>{
  setValue((prev)=>({
    ...prev,
    [event.target.name]:event.target.value
  }))
}

  return (
        <form action="" >
            <h3>Register Form</h3>
            <div className='sub-div'>
            <label htmlFor="" className='form-label'>Name</label>
            <br/>
            <input type="text" className='input-filed' onChange={validOnchange} onBlur={validBlur}/>
            {value.name && <p className='alert'>please fill</p> }
            </div>            
            <div className='sub-div'>
            <label htmlFor="">Email</label>
            <br />
            <input type="email" className='input-filed' onChange={validOnchange} onBlur={validBlur}/>
            {value.email && <p>please fill</p> }
            </div> 
            <div className='sub-div'>
            <label htmlFor="">Gender</label>
            <br />
            <label htmlFor="male">Male</label>
            <input type="radio" name='gender' id='male' value="male" onChange={validOnchange} onBlur={validBlur}/>
            <label htmlFor="female">Femle</label>
            <input type="radio" name='gender' id='female' value="female" onChange={validOnchange} onBlur={validBlur}/>
            {value.gender && <p>please fill</p> }
            </div>
            <div className='sub-div'>
            <label htmlFor="">Select Language</label>
            <br />
            <label htmlFor="">html</label>
            <input type="checkbox" onChange={validOnchange} onBlur={validBlur}/>
            <label htmlFor="">css</label>
            <input type="checkbox" onChange={validOnchange} onBlur={validBlur}/>
            <label htmlFor="">Javascript</label>
            <input type="checkbox" onChange={validOnchange} onBlur={validBlur}/>
            {value.language && <p>please fill</p> }
            </div>
            <div className='submit-div'>
            <button type='submit' className='submit-button'>submit</button>
            </div>
            
        </form>
  )
}

export default Form
