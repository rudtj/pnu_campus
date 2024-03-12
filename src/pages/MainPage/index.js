import React, { useEffect } from 'react';
import Banner from '../../components/Banner';
import { Link } from 'react-router-dom';
import Icon from '../../components/Icon';
import './MainPage.css';

function MainPage() {

  return (
    <div>
        <Banner />
        <div className="main-container">
            <div className="group">
                <div className="main-box">
                    <Link to="/chatting">
                        <Icon id="chatting-icon" />
                    </Link>
                </div>
                <div className="link-text">오픈 채팅방</div>
            </div>
            
            <div className="group">
                <div className="main-box">
                    <Link to="/restaurant">
                        <Icon id="restaurant-icon" />
                    </Link>
                </div>
                <div className="link-text">맛집 리스트</div>
            </div>
            <div className="group">
                <div className="main-box">
                    <Link to="/bus">
                        <Icon id="bus-icon" />
                    </Link>
                </div>
                <div className="link-text">버스 시간표</div>
            </div>
            <div className="group">
                <div className="main-box">
                    <Link to="/library">
                        <Icon id="library-icon" />
                    </Link>
                </div>
                <div className="link-text">도서관 예약</div>
            </div>
        </div>
    </div>
  );
}

export default MainPage;