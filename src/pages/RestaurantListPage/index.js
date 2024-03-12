import React from 'react';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import Icon from '../../components/Icon';
import './RestaurantListPage.css';

function RestaurantListPage() {
  return (
    <div>
      <Banner />
      <div className="main-container">
        <a href=" " target="_blank">
          <Icon id="taxi-icon" />
          <div className="logo-text">택시</div>
        </a>
        <a href=" " target="_blank">
          <Icon id="delivery-icon" />
          <div className="logo-text">배달</div>
        </a>
        <a href=" " target="_blank">
          <Icon id="karaoke-icon" />
          <div className="logo-text">노래방</div>
        </a>
        <a href=" " target="_blank">
          <Icon id="hanwoolim-icon" />
          <div className="logo-text">한울림</div>
        </a>
      </div>
      <Footer page='restaurant' />
    </div>
  )
}

export default RestaurantListPage;