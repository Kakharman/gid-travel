import React from 'react';
import logo from '../assets/images/logo.png';
import mark from '../assets/images/mark.png'

function Header() {
    return (
      <div className="App">
        <header className="header">
            <div className='banner'>
                <div>
                    <img src={logo} alt="logo" className="App-logo" />
                </div>
                <div className='logo-text'>
                    <span>
                        <span className='gid-text'>
                            GID&nbsp;
                        </span>
                        TRAVEL
                    </span>
                </div>
                <div className='brand-message'>
                    <span>
                        ВАШ ГИД ПУТЕШЕСТВИЙ
                    </span>
                </div>
                <div className='search-panel'>
                    <select className="input input-country">
                        <option value="">Страна</option>
                        <option value="country1">Страна 1</option>
                        <option value="country2">Страна 2</option>
                        <option value="country3">Страна 3</option>
                    </select>
  
                    <select className="input input-service">
                        <option value="">Услуга</option>
                        <option value="service1">Услуга 1</option>
                        <option value="service2">Услуга 2</option>
                        <option value="service3">Услуга 3</option>

                    </select>
                    <button className="search-button">
                        Поиск
                    </button>
                </div>
            </div>    
            <div className="hamburger-menu">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </header>
      </div>    
    );
  }
  
  export default Header;
