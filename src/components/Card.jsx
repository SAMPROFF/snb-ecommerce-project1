// import React from 'react'
import { Link } from 'react-router-dom'
//simport { CartState } from '../context/CartContext'
import Button from './Button'
import PropTypes from 'prop-types';

Card.propTypes = {
  item: PropTypes.shape({
    imgUrl: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    id: PropTypes.number,
    price: PropTypes.number,
  }).isRequired,
};


// Card component receives an 'item' object as props
function Card({ item }) {
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={item.imgUrl} alt={item.name} />
      </div>

      <div className='card-content'>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
      </div>

      <div className='card-footer'>
        {/* Link to the product page with the corresponding item id */}
        <Link to={`/product/${item.id}`}>
          <Button name='place order' />
        </Link>

        <span>$ {item.price}</span>
      </div>
    </div>
  )
}

export default Card;
