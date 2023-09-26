import React from 'react';

const style = {
    zIndex : '99999',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)' /* Optional: Add a semi-transparent background */
  }

const Alert = ({ type, message }) => {
  return (
    <div style={style}>
        <div className={`alert alert-${type} `} role="alert" >
            {message}
        </div>
    </div>
  );
};

export default Alert;