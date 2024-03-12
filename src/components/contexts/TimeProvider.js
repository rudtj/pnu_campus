import React, { createContext, useState, useContext } from 'react';

const TimeContext = createContext();

export function TimeProvider({ children }) {
  const [time, setTime] = useState(null);

  const setTimeInfo = () => {
    const now = new Date();
    const endTime = new Date(now.getTime() + 3*60*60*1000);

    const timeOptions = { hour: '2-digit', minute:'2-digit' };
    const startTimeStr = now.toLocaleTimeString('ko-KR', timeOptions);
    const endTimeStr = endTime.toLocaleTimeString('ko-KR', timeOptions);
    
    setTime(`${startTimeStr}~${endTimeStr}`);
  };

  return (
     <TimeContext.Provider value={{ time, setTimeInfo }}>
      {children}
    </TimeContext.Provider>
  );
};

export function useTime() {
    const context = useContext(TimeContext);
    if (context === undefined) {
      throw new Error('useTime must be used within a TimeProvider');
    }
    return context;
};