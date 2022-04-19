import React, {useState} from 'react';
import {useEffect, useRef} from 'react';
import './Main.scss';
import Hero from '../Hero';
import Navbar from '../Navbar';
import Menu from '../Menu';

const Main = () => {
  const [opacity, setOpacity] = useState(1);
  const [contentInfo, setContentInfo] = useState('');
  const [activeMenu, setActiveMenu] = useState(false);

  const myRef = useRef();
  const yakala = useRef();

  useEffect(() => {
    const option = {
      threshold: [0.5],
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setContentInfo(entry.target.dataset);
        }
      });
    }, option);

    myRef.current.childNodes.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  const handleOpacity = () => {
    let screenAt = yakala.current.getBoundingClientRect().top;
    const screenSize = yakala.current.getBoundingClientRect().height;

    setOpacity(Math.abs(0.5 + (screenAt % screenSize) / screenSize) * 2);
  };

  const handleMenu = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <>
      <Menu activeMenu={activeMenu} handleMenu={handleMenu} />
      <main
        className={activeMenu ? 'main active' : 'main'}
        onScroll={handleOpacity}
      >
        <Navbar handleMenu={handleMenu} />
        <Hero className='content' opacity={opacity} contentInfo={contentInfo} />
        <div className='sections ' ref={myRef}>
          <section
            id='model-3'
            data-model='Model 3'
            data-order='Order Online for'
            data-span='Touchless Delivery'
            data-button-left='custom order'
            data-button-right='existing inventory'
            data-arrow='true'
            className='section'
            ref={yakala}
          ></section>
          <section
            id='model-y'
            data-model='Model Y'
            data-order='Order Online for'
            data-span='Touchless Delivery'
            data-button-left='custom order'
            data-button-right='existing inventory'
            className='section'
          ></section>
          <section
            id='model-s'
            data-model='Model S'
            data-order='Order Online for'
            data-span='Touchless Delivery'
            data-button-left='custom order'
            data-button-right='existing inventory'
            className='section'
          ></section>
          <section
            id='model-x'
            data-model='Model X'
            data-order='Order Online for'
            data-span='Touchless Delivery'
            data-button-left='custom order'
            data-button-right='existing inventory'
            className='section'
          ></section>
          <section
            id='solar-panels'
            data-model='Solar Panels'
            data-order='Lowest Cost Solar Panels in America '
            data-button-left='order now'
            data-button-right='learn more'
            className='section'
          ></section>
          <section
            id='solar-roof'
            data-model='Solar Roof'
            data-order='Produce Clean Energy From Your Roof'
            data-button-left='order now'
            data-button-right='learn more'
            className='section'
          ></section>
          <section
            id='accessories'
            data-model='Accessories'
            data-button-left='shop now'
            data-footer='true'
            className='section'
          ></section>
        </div>
      </main>
    </>
  );
};

export default Main;
