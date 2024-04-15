import React,{useEffect} from 'react'

function Title() {
    
    useEffect(() => {
      let Time = setInterval(()=>{

      },1000)
    
      return () => {
        clearInterval(Time)
      }
    }, [])


  return(
    <div>
      <h3>Welcome</h3>
    </div>
  ) 
}

export default Title
