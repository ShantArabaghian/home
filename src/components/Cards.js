import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>LETS GRILL SOME MEAT !</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/burgers.jpg'
              text='Life is too short to miss out on double cheeseburgers'
              label='Burgers'
              path='/Menu'
            />
            <CardItem
              src='images/wings.jpg'
              text='If you eat a chicken wing in some parts of the country, we probably supplied it.'
              label='Wings'
              path='/Menu'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Steak.jpeg'
              text='The only time to eat diet food is while you are waiting for the steak to cook.'
              label='Steak'
              path='/Menu'
            />
            <CardItem
              src='images/kebab.jpg'
              text=' More flavor and better kebabs 100% guaranteed'
              label='Kebab'
              path='/Menu'
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;