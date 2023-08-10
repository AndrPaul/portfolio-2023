import React from 'react';
import './card.scss';
import { FiExternalLink } from 'react-icons/fi';

function Card({ title, image, hrefRep, hrefProj, cardContent }) {
  return (
    <div className='card'>
      <h2 className='card-title'>{title}</h2>
      <img className='card-image' src={image} alt={`${title} Image`} />
      <div className="links-container">
        <a href={hrefRep} className='link' target="_blank"><span>Repository</span><FiExternalLink className='external-icon' /></a>
        <a href={hrefProj} className='link' target="_blank"><span>See project</span><FiExternalLink className='external-icon' /></a>
      </div>
      <p className='card-content'>
        {cardContent}
      </p>
    </div>
  );
}

export default Card;