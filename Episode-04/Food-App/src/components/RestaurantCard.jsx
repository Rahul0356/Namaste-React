import React from 'react'
import Footer from './Footer';

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;
  return (
  <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
  <img
    className="res-logo"
    alt="res-logo"
    src="https://www.shutterstock.com/image-photo/traditional-chicken-biryani-served-brass-600nw-2622739739.jpg"
  />
   <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
      <Footer/>
</div>

  )
}

export default RestaurantCard