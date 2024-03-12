import React, { createContext, useState, useContext } from 'react';

export const ReservationContext = createContext();

export function ReservationProvider({ children }) {
  const [isReserved, setIsReserved] = useState(false);

  const handleConfirm = () => {
    setIsReserved(true);
  };

  const handleCancel = () => {
    setIsReserved(false);
  };

  return (
    <ReservationContext.Provider value={{ isReserved, setIsReserved, handleConfirm, handleCancel }}>
      {children}
    </ReservationContext.Provider>
  );
};

export function useReservation() {
    const context = useContext(ReservationContext);
    if(context === undefined) {
        throw new Error('useReservation must be used within a ReservationProvider');
    }
    return context;
};

