import { useState, useEffect } from 'react';

const SuccessMsg = () => {


  return (
<div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        border: "2px solid",
        marginInline: "24px",
        borderRadius: "20px",
        padding: "64px"
      
      }} className="">
        <h4 style={{
            marginBottom: "32px"
        }}>You for Contacting Us !</h4>
        <p style={{
        maxWidth:"70%",
    textAlign: "center"
      }}>We wanted to take a moment to express our gratitude for reaching out to us. Your inquiry is important to us, and we are committed to providing you with the best assistance possible. Our team is currently reviewing your message and will respond promptly. If you have any further information to add or additional questions, please feel free to let us know. We appreciate your patience and look forward to serving you.</p>
      </div>
    )

};

export default SuccessMsg;
