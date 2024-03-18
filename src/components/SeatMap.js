import React, { useEffect, useState } from 'react';
import Seat from './Seat';
import Icon from './Icon';
import { Link, useNavigate } from 'react-router-dom';
import '../pages/MySeatPage/MySeatPage.css';

function SeatMap({onSeatClick}) {
  const navigate = useNavigate();

  const seatsData = [
    {id:1, top:18, left:2.5},
    {id:2, top:18, left:8.2},
    {id:3, top:29, left:2.5},
    {id:4, top:29, left:8.2},
    {id:5, top:38, left:2.5},
    {id:6, top:38, left:8.2},
    {id:7, top:49, left:2.5},
    {id:8, top:49, left:8.2},
    {id:9, top:58, left:2.5},
    {id:10, top:58, left:8.2},
    {id:11, top:70, left:2.5},
    {id:12, top:70, left:8.2},
    {id:13, top:79, left:2.5},
    {id:14, top:79, left:8.2},
    {id:15, top:90, left:2.5},
    {id:16, top:90, left:8.2},
    {id:17, top:28, left:29},
    {id:18, top:37, left:27},
    {id:19, top:46, left:29},
    {id:20, top:55, left:28},
    {id:21, top:64, left:29},
    {id:22, top:73, left:28},
    {id:23, top:83, left:29},
    {id:24, top:22, left:45},
    {id:25, top:28, left:45},
    {id:26, top:35, left:45},
    {id:27, top:42, left:45},
    {id:28, top:50, left:45},
    {id:29, top:59.5, left:45},
    {id:30, top:66, left:45},
    {id:31, top:73, left:45},
    {id:32, top:80, left:45},
    {id:33, top:88, left:45},
    {id:34, top:25, left:63},
    {id:35, top:32, left:63},
    {id:36, top:39, left:63},
    {id:37, top:45.5, left:63},
    {id:38, top:25, left:77},
    {id:39, top:32, left:77},
    {id:40, top:39, left:77},
    {id:41, top:45.5, left:77},
    {id:42, top:65, left:63},
    {id:43, top:72, left:63},
    {id:44, top:78.5, left:63},
    {id:45, top:85.3, left:63},
    {id:46, top:65, left:77},
    {id:47, top:72, left:77},
    {id:48, top:78.5, left:77},
    {id:49, top:85.3, left:77},
    {id:50, top:17, left:92},
    {id:51, top:26, left:92},
    {id:52, top:35, left:92},
    {id:53, top:44, left:92},
    {id:54, top:53, left:92},
    {id:55, top:62, left:92},
    {id:56, top:71, left:92},
    {id:57, top:80, left:92},
    {id:58, top:89, left:92}
  ];

  const [seats, setSeats] = useState([]);

  useEffect(() => {
    const updatedSeats = seatsData.map(seat => ({...seat, availability: '사용 가능'}));
    setSeats(updatedSeats);
  }, [seatsData]);

  const handleSeatClick = (clickedSeatId) => {
    // 클릭된 좌석의 availability를 변경
    const updatedSeats = seats.map(seat => {
      if (seat.id === clickedSeatId) {
        return {...seat, availability: '사용중'};
      }
      return seat;
    });
    setSeats(updatedSeats);
    // 부모 컴포넌트로 클릭된 좌석의 ID를 전달
    onSeatClick(clickedSeatId);
  };

  return (
    <div style={{position: 'relative', width: '100%', height: '100%'}}>
      <div style={{
        position: 'absolute', 
        top: '20px', 
        left: '10px', 
        zIndex: 3,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: '10px',
      }}>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <span style={{
            fontWeight: 'bold'
          }}>사용 가능</span>
          <Icon id="yellow-icon" />
        </div>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <span style={{
            fontWeight: 'bold'
          }}>사용중</span>
          <Icon id="grey-icon" />
        </div>
      </div>
      <div style={{
        position: 'absolute', 
        top: '20px', 
        right: '10px', 
        zIndex: 3,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: '10px',
      }}>
        <Link to="/myseat" style={{ textDecoration: 'none'}}>
          <button type="button" className="seat-box">
            <img 
              src="/myseat.png"
              alt="나의 자리"
              style={{
                width: '160px',
                height: '70px',
                borderRadius: '10%',
              }}
            />
          </button>
        </Link>
      </div>
      <img 
        src="/seatmap.png"
        alt="seatmap" 
        style={{
          position: 'absolute', 
          top: '55%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          zIndex: 2, 
          width: '100%',
          height: '100%',
          objectFit: 'contain'
        }} 
      />
      {seatsData.map((seat) => 
      <Seat 
        key={seat.id} 
        seat={seat} 
        onSeatClick={handleSeatClick}
      />)}
    </div>
  );
};

export default SeatMap;