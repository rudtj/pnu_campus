import React from 'react';
import './Icon.css';

function Icon({ id, size="200px" }) {
  let iconElement;
  switch (id) {
    case 'chatting-icon':
        iconElement = <img className="logo-image" style={{ width: size, height: size }} src="/icons/chatting.png" alt={id} />;
    break;
    case 'restaurant-icon':
        iconElement = <img className="logo-image" style={{ width: size, height: size }} src="/icons/restaurant.png" alt={id} />;
    break;
    case 'bus-icon':
        iconElement = <img className="logo-image" style={{ width: size, height: size }} src="/icons/bus.png" alt={id} />;
    break;
    case 'book-icon':
        iconElement = <img className="logo-image" style={{ width: size, height: size }} src="/icons/book.png" alt={id} />;
    break;
    case 'library-icon':
        iconElement = (
            <div style={{ position: 'relative' }}>
              <img className="logo-image" style={{ width: size, height: size }} src="/icons/book.png" alt={id} />
              <img 
                className="logo-image"
                src="/icons/reserved.png" 
                alt={id} 
                style={{ 
                  position: 'absolute', 
                  top: '50%', 
                  left: '50%', 
                  transform: 'translate(-50%, -50%)', 
                  zIndex: 1, // 예약 아이콘이  앞에 위치,
                  width: size,
                  height: size
                }} 
              />
            </div>
          );
    break;
    case 'taxi-icon':
        iconElement = <img className="chatting-image" src="/icons/taxi.png" alt={id} />;
    break;
    case 'delivery-icon':
        iconElement = <img className="chatting-image" src="/icons/delivery.png" alt={id} />;
    break;
    case 'karaoke-icon':
        iconElement = <img className="chatting-image" src="/icons/karaoke.png" alt={id} />;
    break;
    case 'hanwoolim-icon':
        iconElement = <img className="chatting-image" src="/icons/hanwoolim.png" alt={id} />;
    break;
    case 'chatting-black-icon':
        iconElement = <img className="logo-image" style={{ width: size, height: size }} src="/icons/chatting-black.png" alt={id} />;
    break;
    case 'restaurant-black-icon':
        iconElement = <img className="logo-image" style={{ width: size, height: size }} src="/icons/restaurant-black.png" alt={id} />;
    break;
    case 'bus-black-icon':
        iconElement = <img className="logo-image" style={{ width: size, height: size }} src="/icons/bus-black.png" alt={id} />;
    break;
    case 'book-black-icon':
        iconElement = <img className="logo-image" style={{ width: size, height: size }} src="/icons/book-black.png" alt={id} />;
    break;
    case 'qr-icon':
        iconElement = <img className="qr-image" style={{ width: size, height: size }} src="/icons/qr.png" alt={id} />;
    break;
    case 'yellow-icon':
        iconElement = <img className="color-image" src="/icons/yellow.png" alt={id} />;
    break;
    case 'grey-icon':
        iconElement = <img className="color-image" src="/icons/grey.png" alt={id} />;
    break;
  }
  return iconElement;
}

export default Icon;