import React from 'react';
import styled from 'styled-components';
import KakaoLogin from '../KakaoLogin';

const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #0F52BA;
  height: 80px;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Logo = styled.img`
  display: flex;
  justify-content: space-between;
  align-items: center;
  weight: 70px;
  height: 70px;
  margin-top: 40px;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-size: 23px;
  color: #ffffff;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const Campus = styled.div`
  position: absolute;
  top: 60px;
  margin-left: 90px;
  margin-top: 10px;
  font-size: 22px;
  color: #ffffff;
`;

const LoginContainer = styled.img`
  display: flex;
  align-items: center;
`;

const Banner = () => (
  <BannerContainer>
    <LeftContainer>
      <Logo src="/logo/pnu.png" alt="logo" />
      <Title>
        <h2>부 산 대 학 교</h2>
      </Title>
      <Campus>
        밀양캠퍼스
      </Campus>
    </LeftContainer>
    <KakaoLogin />
  </BannerContainer>
);

export default Banner;