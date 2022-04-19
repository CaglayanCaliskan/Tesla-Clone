import React from 'react';
import './Hero.scss';
import Button from '../Button';
import Footer from '../Footer/Footer';

const Hero = ({opacity, contentInfo}) => {
  // PS: console.log('burdaaaaa', contentInfo); neden scrolldown da tetikleniyor ??
  return (
    <section className='content' style={{opacity: opacity}}>
      <div className='content-in'>
        <div className='content text'>
          <h1>{contentInfo.model}</h1>
          <p>
            {contentInfo.order} <span>{contentInfo.span}</span>
          </p>
        </div>
        <Button contentInfo={contentInfo} />
        {contentInfo.footer && <Footer />}
        {contentInfo.arrow && (
          <div id='page-down'>
            <a href='/#model-y'>
              <svg viewBox='0 0 25 25' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M4.293 16.317a1 1 0 0 0 1.414 0L12 10.025l6.293 6.293a1 1 0 1 0 1.414-1.414l-7-7a1 1 0 0 0-1.414 0l-7 7a1 1 0 0 0 0 1.414z'
                  fill='currentColor'
                ></path>
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
