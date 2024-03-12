import React from 'react';

function Seat({seat, onSeatClick}) {

  const backgroundColor = seat.availability === '사용 가능' ? '#FFD400' : '#D3D3D3';

  const handleClick = () => {
    onSeatClick(seat.id);
  };

  return (
    <button 
      style={{
        position: 'absolute', 
        top: `${seat.top}%`, 
        left: `${seat.left}%`, 
        zIndex: 3,
        backgroundColor: backgroundColor,
        width: '35px',
        height: '25px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }} 
      className="seat-button"
      onClick={handleClick}
    >
      {seat.id}
    </button>
  );
};

export default Seat;