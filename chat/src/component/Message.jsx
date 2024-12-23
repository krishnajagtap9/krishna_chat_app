import React from 'react'
import "../all_Css/Message.css"

const Message = ({users, message,classs ,time}) => {
  if(users){
    return (
        <div className={`Message ${classs}`} >
          <p id='owner'>{`${users}`}</p>
          <p id='message_Description'>{`${message}`}</p>
          <p id='time'> {`${time}`}</p>
        </div>
      )  }

      else{
        return (
            <div className={`Message ${classs}`} >
              <p id='owner'>{` You `}</p>
              <p>{`${message}`}</p>
              
            </div>
          )
      }
  
  
}

export default Message
