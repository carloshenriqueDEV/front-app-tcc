import React from "react";

const customButtonStyle = {
    backgroundColor: '#ff6600',
    color: 'white',
  };

const socialMidiasStyle = {
    color : 'white',
    margin : '2%'
}

const develomentStyle = {
    
}

function Footer() {
    return <div  style={customButtonStyle}>
        <h3> <a href="#"><i className="bi bi-facebook" style={socialMidiasStyle}></i></a>
             <a href="#"><i className="bi bi-instagram" style={socialMidiasStyle}></i></a>
             <a href="#"><i className="bi bi-whatsapp" style={socialMidiasStyle}></i></a>
             <a href="#"><i className="bi bi-twitter" style={socialMidiasStyle}></i></a>
        </h3>
        <span>Development House ltda</span>
    </div>
}

export default Footer;