import React, { useState }from 'react';

function ReservationModal({ seatNumber, onConfirm, onCancel }) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isCanceled, setIsCanceled] = useState(false);
  const [isHoveredYes, setIsHoveredYes] = useState(false);
  const [isHoveredNo, setIsHoveredNo] = useState(false);
  

  const handleYes = () => {
    onConfirm();
    setIsConfirmed(true);
  };

  const handleNo = () => {
    onCancel();
    setIsCanceled(true);
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '380px',
      height: '170px',
      padding: '20px',
      backgroundColor: 'white',
      border: '1px solid black',
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 3,
    }}>
      <h2>{`${seatNumber}번 좌석을 발권하시겠습니까?`}</h2>
      <hr style={{ width: '100%', margin: '20px 0' }} />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      }}>
        <button 
          onClick={handleYes}
          onMouseEnter={() => setIsHoveredYes(true)}
          onMouseLeave={() => setIsHoveredYes(false)}
          style={{
            fontSize: '20px',
            backgroundColor: 'white',
            border: 'none',
            color: isHoveredYes ? 'blue' : (isConfirmed ? 'blue' : 'black'),
            paddingRight: '60px',
          }}
        >예</button>
        <hr style={{ height: '50px', margin: '0 20px' }} />
        <button 
          onClick={handleNo}
          onMouseEnter={() => setIsHoveredNo(true)}
          onMouseLeave={() => setIsHoveredNo(false)}
          style={{
            fontSize: '20px',
            backgroundColor: 'white',
            border: 'none',
            color: isHoveredNo ? 'blue' : (isCanceled ? 'blue' : 'black'),
            paddingLeft: '60px',
          }}
        >아니오</button>
      </div>
    </div>
  );
}

export default ReservationModal;
