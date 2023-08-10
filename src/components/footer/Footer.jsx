import React from 'react';
import './footer.scss';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className='footer'>
      <p>
        This website was built using React.js <strong>—&nbsp;paulandrica.com © {currentYear}</strong>
      </p>
    </div>
  );
}

export default Footer;