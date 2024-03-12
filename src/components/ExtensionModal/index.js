import React, { useRef } from 'react';
import useOnclickOutside from '../../hooks/useOnclickOutside';
import TimeSelector from '../TimeSelector';
import './ExtensionModal.css';

function ExtensionModal({ seatNumber, handleExtension, setModalOpen }) {
  const ref = useRef();
  useOnclickOutside(ref, () => {
    setModalOpen(false);
  });

  return (
    <div className="extend-container">
        <div className="extend-content" ref={ref}>
            <h1>{seatNumber}번</h1>
            <div className="extend-detail">
                <p>최대 예약 가능한 시간은 3시간입니다.</p>
                <p>연장 가능한 시간은 퇴실 10분 전까지이므로 주의해주세요.</p>
            </div>
            <TimeSelector />
            <button className="button" onClick={handleExtension}>
                <span className="circle1"></span>
                <span className="circle2"></span>
                <span className="circle3"></span>
                <span className="circle4"></span>
                <span className="circle5"></span>
                <span className="text">연장하기</span>
            </button>
        </div>
    </div>
  )
}

export default ExtensionModal;