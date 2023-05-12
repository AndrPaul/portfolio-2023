import React from 'react'
import { Link } from 'react-router-dom'
import './primaryBtn.scss'

function PrimaryBtn({ text, path, color }) {
  const className = `primary-btn ${color === 'green' ? 'green' : 'orange'}`;

  return (
    <Link to={path} className={className}>
      {text}
    </Link>
  );
}
export default PrimaryBtn