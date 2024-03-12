import React from 'react';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Icon from '../../components/Icon';
import './ChattingPage.css';

function ChattingPage() {
  return (
    <div>
        <Banner />
        <div className="chatting-container">
            <div className="group">
                <div className="icon-box">
                    <a href=" " target="_blank">
                        <Icon id="taxi-icon" />
                    </a>
                </div>
                <div className="logo-text">택시</div>
            </div>
            <div className="group">
                <div className="icon-box">
                    <a href=" " target="_blank">
                        <Icon id="delivery-icon" />
                    </a>
                </div>
                <div className="logo-text">배달</div>
            </div>
            <div className="group">
                <div className="icon-box">
                    <a href=" " target="_blank">
                        <Icon id="karaoke-icon" />
                    </a>
                </div>
                <div className="logo-text">노래방</div>
            </div>
            <div className="group">
                <div className="icon-box">
                    <a href=" " target="_blank">
                        <Icon id="hanwoolim-icon" />
                    </a>
                </div>
                <div className="logo-text">한울림</div>
            </div>
        </div>
        <Footer page='chatting' />
    </div>
  )
}

export default ChattingPage;