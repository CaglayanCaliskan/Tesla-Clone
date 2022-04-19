import React, {useState} from 'react';
import './Navbar.scss';

const Navbar = ({handleMenu}) => {
  const [lightConfig, setLightConfig] = useState({});
  const [lightDisplay, setLightDisplay] = useState(false);

  const handleLightDisplay = (e) => {
    setLightConfig(false);
  };

  const handleHighLight = (e) => {
    if (
      e.target.nodeName === 'A' &&
      e.target.parentNode.classList[1] !== 'left'
    ) {
      setLightConfig(e.target.getBoundingClientRect());
      setLightDisplay(true);
    }
  };

  return (
    <header className='navbar'>
      <div
        className='navbar-in'
        onMouseEnter={handleLightDisplay}
        onMouseLeave={handleLightDisplay}
        onMouseMove={handleHighLight}
      >
        <div
          className='highlighter'
          style={{
            display: `${lightDisplay ? 'block' : 'none'}`,
            width: lightConfig.width,
            height: lightConfig.height,
            left: lightConfig.x,
            top: lightConfig.y,
          }}
        ></div>
        <nav className='nav-options left'>
          <a href='/' className='logo'>
            <svg viewBox='0 0 342 35' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z'
                fill='currentColor'
              ></path>
            </svg>
          </a>
        </nav>

        <nav className='nav-options center'>
          <a href='/#model-s'>Model S</a>
          <a href='/#model-3'>Model 3</a>
          <a href='/#model-x'>Model X</a>
          <a href='/#model-y'>Model Y</a>
          <a href='/#solar-roof'>Solar Roof</a>
          <a href='/#solar-panels'>Solar Panels</a>
        </nav>
        <nav className='nav-options right'>
          <a href='/#' className='option'>
            Shop
          </a>
          <a href='/#' className='option'>
            Account
          </a>
          <a href='/#' id='menuBtn' onClick={handleMenu}>
            Menu
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
