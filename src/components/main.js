import React from 'react';
import { useState } from 'react';
import image from '../assets/images/Фото.png';
import image2 from '../assets/images/Фото2.png';
import image3 from '../assets/images/фото5.png';
import image4 from '../assets/images/Фото3.png';
import image5 from '../assets/images/image5.png';
import image6 from '../assets/images/Фото6.png';
import image7 from '../assets/images/Фото7.png';
import locationIcon from '../assets/images/location.png'
import placeImage from '../assets/images/Фото10.png'
import placeImage2 from '../assets/images/Фото11.png'
import placeImage3 from '../assets/images/Фото12.png'
import placeImage4 from '../assets/images/Фото14.png'
import teamImage from '../assets/images/team.svg'
import iconComment from '../assets/images/feedback.svg'
import iconBook from '../assets/images/book.svg'




function Main() {

const [guides, setguides] = useState([
{
    name: 'Василий',
    city: 'г. Шымкент',
    image: image
},
{
    name: 'Алексей',
    city: 'г. Минск',
    image: image2    
},
{
    name: 'Марина',
    city: 'г. Астана',
    image: image3    
},
{
    name: 'Алим',
    city: 'г. Алматы',
    image: image4    
},
{
    name: 'Гузель',
    city: 'г. Шымкент',
    image: image5    
},
{
    name: 'Игорь',
    city: 'г. Астана',
    image: image6   
},
{
    name: 'Руслан',
    city: 'г. Астана',
    image: image7    
},
])
    const [places, setPlaces] = useState([
        {
            place:'Брайес',
            location: 'Южный Триполь, Италия',
            price: 'от 15 000 ₸',
            photo: placeImage
        },
        {
            place:'Отель «ГрандЛюкс Океания Лендина»',
            location: 'о. Хольбош, Мексика',
            price: 'от 8 500 ₸',
            photo: placeImage2
        },
        {
            place:'Отель «ГринВилла»',
            location: 'Ао Нанг, Таиланд',
            price: 'от 9 250 ₸',
            photo: placeImage3
        },
        {
            place:'Отель «Бауер»',
            location: 'о. Капри, Италия',
            price: 'от 10 470 ₸',
            photo: placeImage4
        },
        
    ])



    return (
    <div>  
        <div className='popular-guides'>
            <h2 className='main-text-guides'>
                Популярные гиды
            </h2>
        </div>
        <div className='guides'>
            {guides.map((guide, index) => (
            <div key={index} className="guide-item">
                <img className='avatar' src={guide.image} alt={guide.name} />
                <h2>{guide.name}</h2>
                <div className="location-container"> 
                    <img className='location-img' src={locationIcon} alt="Локация" />
                    <p>{guide.city}</p>
                </div>
            </div>
            ))}
        </div>
        <div className='main-content'>
            <div className='popular-places'>
                <h2 className='main-text-places'>
                    Популярные места отдыха
                </h2>
            </div>
            <div className='places-list'>
                {places.map((place, index) => (
                <div key={index} className="place-item">
                    <img src={place.photo} alt={place.place} className="place-photo"/>
                    <div className="place-info">
                    <h2>{place.place}</h2>
                        <div className="location-container"> 
                            <img className='location-img' src={locationIcon} alt="Локация" />
                            <p>{place.location}</p>
                        </div>
                        <p>Цена: <strong className="strong-price">{place.price}</strong></p>
                    </div>
                </div>
                ))}
            </div>
            <div className='why-choose-us'>
                <div className='popular-guides'>
                    <h2 className='main-text-guides'>
                        Почему мы?
                    </h2>
                </div>
                <div className='all-info'>
                    <div className='cards-box'>
                        <div className='info-card'>
                            <div className='circle'>
                                <img className='team-img' src={teamImage} alt="Team" />
                            </div>
                            <div className='info-cards-text'>
                                <span className='highlighted-words'>
                                    Многолетний опыт
                                </span>
                            наших специалистов 
                            </div>
                        </div>
                        <div className='info-card'>
                            <div className='circle'>
                                <img className='comment-img' src={iconComment} alt="Team" />
                            </div>
                            <div className='info-cards-text'>
                                <span className='highlighted-words'>
                                Огромное колличество положительных отзывов
                                </span>
                                наших партнеров и клиентов
                            </div>
                        </div>
                        <div className='info-card'>
                            <div className='circle'>
                                <img className='book-img' src={iconBook} alt="Team" />
                            </div>
                            <div className='info-cards-text'>
                                <span className='highlighted-words'>
                                    Тщательный отбор и проверка всех гидов,
                                </span>
                                туров и мест отдыха
                            </div>
                        </div>
                    </div>    
                </div>    
            </div>
        </div>
    </div>  
    );
  }
  
  export default Main;