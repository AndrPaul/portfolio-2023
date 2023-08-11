
import { Link } from 'react-router-dom';
import './primaryBtn.scss';

function PrimaryBtn({ text, path, color, newTab }) {
  const className = `primary-btn ${color === 'green' ? 'green' : 'orange'}`;

  if (newTab) {
    return (
      <a href={path} className={className} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    );
  } else {
    return (
      <Link to={path} className={className}>
        {text}
      </Link>
    );
  }
}



export default PrimaryBtn;