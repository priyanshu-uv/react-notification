import React, { useState } from 'react'

const ReactNotification = () => {
    const [permission,setPermission]=useState(Notification.permission)

    const requestPermission = () => {
      if("Notification" in window){
        Notification.requestPermission().then(permission => {
          setPermission(permission)
          })
          
      }
      else{
        alert("Your browser does not support notifications")
      }
  
    }
  
    const sendNotification=()=>{
      if(permission==="granted"){
        new Notification("Hello",{
          body:"This is a browser notification from the app",
          icon:"https://img.icons8.com/?size=100&id=63807&format=png&color=000000",
  
        })
      }else{
        alert("Please allow notifications")
      }
    }
  
    return (
      <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
      }}>
        <h1>React Browser Notification Implementation 🚀</h1>
        {
          permission!=="granted"? (
            <button onClick={requestPermission}>enable notification</button>
          ):<button onClick={sendNotification}>send notification</button>
  
        }
      </div>
    )
}

export default ReactNotification
