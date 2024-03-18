import React, { useState }from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import './LibraryReservationPage.css';
import SeatMap from '../../components/SeatMap';
import ReservationModal from '../../components/ReservationModal/ReservationModal';
import { useReservation } from '../../components/contexts/ReservationProvider';
import { useTime } from '../../components/contexts/TimeProvider';


function LibraryReservationPage() {
  const { setIsReserved } = useReservation(); 
  const { setTimeInfo } = useTime();
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [seatNumber, setSeatNumber] = useState(null);

  const handleSeatClick = (seatNumber) => {
    setSeatNumber(seatNumber);
    setModalOpen(true);
  };

  const handleConfirm = () => {
    setTimeInfo();
    setIsReserved();
    navigate('/myseat', { state: { seatNumber } });
  };

  const handleCancel = () => {
    setModalOpen(false);
  };


  return (
    <div>
      <Banner />
      <div className="library-container">
        <div className="white-box">
          <SeatMap onSeatClick={handleSeatClick} />
        </div>
      </div>
      {modalOpen && (
        <ReservationModal
          seatNumber={seatNumber}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
      <Footer page='library' />
    </div>
  );
}

export default LibraryReservationPage;