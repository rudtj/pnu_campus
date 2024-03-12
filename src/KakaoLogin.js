import React from 'react';
import axios from 'axios';

// axios 전역 설정
axios.defaults.withCredentials = true;

const KakaoLogin = () => {
    const kakaoURL = '/auth/kakao';
    const handleLogin = async ()=>{
        try {
            // 카카오 로그인 요청
            const response = await axios.get(kakaoURL);
            const { data } = response;

            console.log('Received data:', data);

            // 받은 데이터를 JSON 형식으로 저장
            localStorage.setItem('userData', JSON.stringify(data));

            // 토큰 관리
            const idToken = data.access_token;

            // 토큰이 존재할 경우에만 로컬 스토리지에 저장
            if (idToken) {
                localStorage.setItem('idToken', idToken);

                console.log('success');
            } else {
                console.error('Token is missing in the response:', data);
            }
            //window.location.href = '/';
        } catch (error) {
            console.error('Failed to login with Kakao:', error);
        }
    }
    return(
        <button id="kakao-login-btn" onClick={handleLogin}>
            <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222" alt="카카오 로그인 버튼" />
        </button>
    );
};

export default KakaoLogin;


