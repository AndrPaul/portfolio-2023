import React from 'react';
import './stackImgs.scss'


import HtmlLogo from '../../assets/icons/html-logo.png';
import CSSLogo from '../../assets/icons/css-logo.png';
import JsLogo from '../../assets/icons/javascript-logo.png';
import SassLogo from '../../assets/icons/sass-logo.png';
import ReactLogo from '../../assets/icons/react-logo.png';
import MagnoliaLogo from '../../assets/icons/magnolia-logo.png';
import FoundationLogo from '../../assets/icons/foundation-logo.png';
import AtLogo from '../../assets/icons/adobe-target-logo.png';

function StackImgs() {
  const logos = [
    { name: 'HTML', src: HtmlLogo },
    { name: 'CSS', src: CSSLogo },
    { name: 'Sass', src: SassLogo },
    { name: 'Javascript', src: JsLogo },
    { name: 'React', src: ReactLogo },
    { name: 'Magnolia', src: MagnoliaLogo },
    { name: 'Foundation', src: FoundationLogo },
    { name: 'Adobe Target', src: AtLogo },

  ];

  return (
    <div className='stack-logos'>
      {logos.map((logo) => (
        <div className="logos-wrapper">
          <img key={logo.name} src={logo.src} alt={`${logo.name} logo`} />
        </div>
      ))}
    </div>
  );
}

export default StackImgs;