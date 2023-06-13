import React from 'react';

const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <nav className='header__nav'>
          <ul className='header__list'>
            <li className='header__item'align="left"> Для мужчин</li>
            <li className='header__item'align="left">Для женщин</li>
            <li className='header__item'align="left">Для детей</li>
            <li className='header__item'align="right">Оплата</li>
            <li className='header__item'align="right">Доставка</li>
          </ul>
          <h1 className='header__title' align="center"> THE LOOP </h1>
        </nav>
      </div>
    </header>
  )
};

export default Header;