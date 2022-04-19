import React from 'react';
import './Button.scss';

const Button = ({contentInfo}) => {
  return (
    <div className='buttons'>
      {contentInfo.buttonLeft && (
        <button>
          <a href='/'>
            <span>{contentInfo.buttonLeft}</span>
          </a>
        </button>
      )}
      {contentInfo.buttonRight && (
        <button>
          <a href='/'>
            <span>{contentInfo.buttonRight}</span>
          </a>
        </button>
      )}
    </div>
  );
};

export default Button;
