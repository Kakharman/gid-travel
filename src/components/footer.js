import React from 'react';
import bag from '../assets/images/bag.png'
import traveler from '../assets/images/tourist.png'
import home from '../assets/images/home.png'
import inst from '../assets/images/inst.png'
import whatsApp from '../assets/images/whatsapp.png'

function Footer() {
    return (
      <div>
        <div className='footer'>
            <div className='inside-area'>
                <div className='patners'>
                    <div className='heading'>
                        <img className='bag-img' src={bag} alt="bag" />
                        <span>Партнерам</span>
                    </div>
                    <div className='user-navigation'>
                        <span className='text-span'>Личный кабинет</span>
                        <span className='text-span'>Заявка на расмещение</span>
                        <span className='text-span'>Вопросы и ответы</span>
                    </div>
                </div>
                <div className='patners'>
                    <div className='heading'>
                        <img className='traveler-img' src={traveler} alt="traveler" />
                        <span>Путишественникам</span>
                    </div>
                    <div className='user-navigation'>
                        <span className='text-span'>О нас</span>
                        <span className='text-span'>Партнерам</span>
                        <span className='text-span'>Политика конфеденциальности</span>
                    </div>
                </div>
                <div className='patners'>
                    <div className='heading'>
                        <img className='home-img' src={home} alt="home" />
                        <span>Контакты</span>
                    </div>
                    <div className='user-navigation'>
                        <span className='phone-num'>Телефоны</span>
                        <span className='text-span'>+ 7 (777) 777-77-77</span>
                        <span className='text-span'>+ 7 (977) 770-00-00</span>
                    </div>
                </div>
                <div className='user-mail'>
                    <span className='email'>email</span>
                    <span className='text-span'>info@gid travel.kz</span>
                    <span className='text-span'>travel@gid travel.kz</span>
                </div>
                <div className='links'>
                    <div className='link-cirle-instagram'>
                        <img className='link-icon' src={inst} alt="instagram" />
                    </div>
                    <div className='link-cirle-facebook facebook'>
                        <span>f</span> 
                    </div>
                    <div className='link-cirle-whatsapp'>
                        <img className='link-icon' src={whatsApp} alt="whatsapp" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Footer;