import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faCartShopping, faArrowRightToBracket, faHandshakeAngle, faBriefcase } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: '#fff',
        borderBottom: '1px solid #ccc',
      }}
    >
      <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Logo</div>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <a href="/" style={{ textDecoration: 'none', color: '#333', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <FontAwesomeIcon icon={faHouseUser} />
          Home
        </a>
        <a href="/cart" style={{ textDecoration: 'none', color: '#333', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <FontAwesomeIcon icon={faCartShopping} />
          Cart
        </a>
        <a href="/sign-in" style={{ textDecoration: 'none', color: '#333', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <FontAwesomeIcon icon={faArrowRightToBracket} />
          Sign In
        </a>
        <a href="/help" style={{ textDecoration: 'none', color: '#333', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <FontAwesomeIcon icon={faHandshakeAngle} />
          Help
        </a>
        <a href="/offers" style={{ textDecoration: 'none', color: '#FF6347', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <FontAwesomeIcon icon={faBriefcase} />
          Offers
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
