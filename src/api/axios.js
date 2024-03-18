import axios from "axios";

export async function fetchSeats() {
    try {
        const response = await axios.get('http://localhost:5000/library/seats');
        return response.data.response;
    } catch (error) {
        console.error('Failed to fetch seats', error);
        return [];
    }
};

