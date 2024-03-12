import React from 'react';
import Icon from './Icon';
import { Link } from 'react-router-dom';

function Footer({ page }) {
  let iconIds;
  let links;
  switch(page) {
    case 'chatting':
      iconIds = ['chatting-icon', 'restaurant-black-icon', 'bus-black-icon', 'book-black-icon'];
      links = ['/', '/restaurant', '/bus', '/library'];
      break;
      case 'restaurant':
        iconIds = ['chatting-black-icon', 'restaurant-icon', 'bus-black-icon', 'book-black-icon'];
        links = ['/chatting', '/', '/bus', '/library'];
        break;
      case 'bus':
        iconIds = ['chatting-black-icon', 'restaurant-black-icon', 'bus-icon', 'book-black-icon'];
        links = ['/chatting', '/restaurant', '/', '/library'];
        break;
      case 'library':
        iconIds = ['chatting-black-icon', 'restaurant-black-icon', 'bus-black-icon', 'book-icon'];
        links = ['/chatting', '/restaurant', '/bus', '/'];
        break;
      default:
        iconIds = [];
        links = [];
  }
  return (
    <footer>
        <div style={{ display: 'flex', justifyContent: 'space-around', borderTop: '1px solid #ddd', paddingTop: '10px', paddingBottom:'10px' }}>
          {iconIds && links && iconIds.map((id, index) => (
            links[index] ? (
              <Link key={id} to={links[index]}>
                <Icon id={id} size="70px" />
              </Link>
            ) : (
              <Icon key={id} id={id} size="70px" />
            )
          ))}
        </div>
    </footer>
  );
}

export default Footer;