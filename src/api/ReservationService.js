import React from "react";
import axios from "axios";

const reserveSeat =async(seatNumber, time) => {
    const idToken = localStorage.getItem('idToken');

    try {
        // 예약 요청 보내기
        const response = await axios.post('/reserve', { seatNumber, time }, {
            headers: {
                Authorization: `Bearer ${idToken}`
            }
        });
        console.log('Reservation successful:', response.data);
    } catch(error) {
        console.error('Failed to reserve seat:', error);
    }
}

export default reserveSeat;