// import React from 'react';
// import './Button.css';
// import { Link } from 'react-router-dom';

import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';


const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  page
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  // const handleClick = ({page}) => {
  //   console.log('hey');
  //   // Change the page
  //   useHistory.push(page);
  // };

  return (
    <Link to={page} className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        // onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
