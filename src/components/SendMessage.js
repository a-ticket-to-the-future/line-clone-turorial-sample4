import React, { useState } from 'react'
import { db , auth } from '../firebase';
import firebase from "firebase/compat/app";
import { Button, Input } from '@mui/material';
import { Send } from '@mui/icons-material';




function SendMessage() {

    const [message , setMessages] = useState("");


    function sendMessage(e) {
        e.preventDefault();

        const {uid, photoURL} = auth.currentUser;  //← 今ログインしているユーザーの情報

        db.collection("messages").add({
            text:message,
            photoURL,
            uid,
            createdAt:firebase.firestore.FieldValue.serverTimestamp(),
        });

        setMessages("");

    }

  return (
    <div>
        <form onSubmit={sendMessage}>
            <div className='sendMsg'>
                <Input
                  style={{
                    width: "78%",
                    fontSize: "15px",
                    fontWeight: "550",
                    marginLeft: "5px",
                    marginBottom: "-3px",
                  }} 
                    placeholder='メッセージを入力してください'
                    type='text'
                    onChange={(e) => setMessages(e.target.value)} 
                    value={message}  //このvalueは忘れそう・・・
                     />
                     <Send onClick={sendMessage} style={{ color: "#7AC2FF", marginLeft: "20px", cursor:"pointer" }} />
            </div>
            
            
            
        </form>
    </div>
  )
}

export default SendMessage