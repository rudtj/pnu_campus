import React, { useState } from 'react';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ReservationModal from '../../components/ReservationModal/ReservationModal';
import { useReservation } from '../../components/contexts/ReservationProvider';
import { useTime } from '../../components/contexts/TimeProvider';
import './MySeatPage.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function MySeatPage() {
  const location = useLocation();
  const { seatNumber } = location.state || {}; // 상태가 없는 경우를 대비하여 기본값 설정
  const { handleConfirm, handleCancel } = useReservation();
  const { time } = useTime();
  const [showReservation, setShowReservation] = useState(false);
  const navigate = useNavigate();

  const handleConfirmReservation = () => {
    handleConfirm();
    setShowReservation(true);
  };

  const handleExit = () => {
    navigate('/');
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Banner />
      <div 
        className="seat-container" 
        style={{ 
          position: 'relative',
          zIndex: 3,
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <div style={{
          position: 'relative', 
          top: '50px', 
          right: '60px', 
          zIndex: 2,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '10px',
          width: '600px',
        }}>
          <Link to="/library" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <span style={{
              color: 'rgba(255, 255,255, 0.9)',
              fontSize: '40px',
              marginBottom: '5px',
              marginRight: '10px',
            }}>&lt;</span>
            <span style={{
              color: 'rgba(255, 255,255, 0.9)',
              fontSize: '40px',
            }}>나의 자리</span>
          </Link>
        </div>
        <div className="seat-white">
          {showReservation ? (
            <div>
              <p>일반 열람실 발권 정보</p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                color: '#888',
                borderBottom: '1px dashed #888', // 회색 점선 구분선 추가
                paddingBottom: '10px'
              }}></div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                color: '#888'
              }}>
                <p style={{ marginRight: '10px' }}>좌석 정보</p>
                <p>{seatNumber}번</p>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                color: '#888'
              }}>
                <p style={{ marginRight: '10px' }}>사용 시간</p>
                <p>{time}</p>
              </div>
            </div>
          ) : (
            <h1 style={{ color: '#aaa', textAlign: 'center' }}>발권된 좌석 또는 예약된 그룹스터디룸,<br/>매체 제작실이 없습니다.</h1>
          )}
        </div>
          <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '50px',
          }}>
            {showReservation ? (
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                  renderBullet: (index, className) => {
                    return `<span class="${className}">${index + 1}</span>`;
                  },
                }}
              >
                <SwiperSlide>
                  <button
                    onClick={handleConfirmReservation}
                    style={{
                      backgroundColor: '#2559A5',
                      color: 'white',
                      border: '1px solid white',
                      borderRadius: '10px',
                      padding: '10px 20px',
                      cursor: 'pointer',
                    }}
                >연장</button>
                </SwiperSlide>
                <SwiperSlide>
                  <button
                    onClick={handleExit} 
                    style={{
                      backgroundColor: '#2559A5',
                      color: 'white',
                      border: '1px solid white',
                      borderRadius: '10px',
                      padding: '10px 20px',
                      cursor: 'pointer',
                    }}
                  >퇴실</button>
                </SwiperSlide>
              </Swiper>
            ) : (
              <h1 style={{ 
                color: 'rgba(255, 255,255, 0.9)', 
                position: 'relative', 
                top: '-30px',
                textAlign: 'center', 
              }}>좌석관리, 그룹스터디룸, 매체 제작실<br/>메뉴를 통해 예약해주세요.</h1>
            )}
          </div>
        {seatNumber && showReservation && <ReservationModal seatNumber={seatNumber} onConfirm={handleConfirmReservation} onCancel={handleCancel} />}

      </div>

      <Footer page='library' style={{ position: 'fixed', bottom: 0, width: '100%' }}/>
    </div>
  );
};
export default MySeatPage;