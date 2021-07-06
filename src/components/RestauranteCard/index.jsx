import React from 'react';
import ReactStars from "react-rating-stars-component";
import {Restaurant, RestaurantInfo, Title, Andress, RestaurantImage} from './style'
import defaultRestaurant from '../../assets/restaurante-fake.png'

export const RestauranteCard = ({restaurante}) => 
<Restaurant>
  <RestaurantInfo>
      <Title>{restaurante.name}</Title>
      <ReactStars count={5} isHalf value={restaurante.rating} edit={false} activeColor="#e7711c" />
      <p>Avaliação</p>
      <Andress>{restaurante.vicinity || restaurante.formatted_anddress}</Andress>
  </RestaurantInfo>
  <RestaurantImage src={restaurante.photos ? restaurante.photos[0].getUrl() : defaultRestaurant} alt="Foto do restaurante" />
</Restaurant>;