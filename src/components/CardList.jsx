// import React from 'react';

import Card from './Card';
//import Data from '../Data';
import PropTypes from 'prop-types';


CardList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};


function CardList({products}) {
    const cardList = products.map((item)=>(
        <Card item={item} key={item.id}/>
        
    ))
  return (
    <div className='card-container'>
      {cardList}
    </div>
  )
}

export default CardList;