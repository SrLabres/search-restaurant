import React from 'react';
import ReactStars from "react-rating-stars-component";
import restaurante from '../../assets/restaurante-fake.png'
import {Restaurant, RestaurantInfo, Title, Andress, RestaurantImage} from './style'

export const RestauranteCard = () => 
<Restaurant>
  <RestaurantInfo>
      <Title>Nome do Restaurante</Title>
      <ReactStars count={5} isHalf value={4} edit={false} activeColor="#e7711c" />
      <p>Avaliação</p>
      <Andress>Rua Rio de Janeiro 120</Andress>
  </RestaurantInfo>
  <RestaurantImage src={restaurante} alt="Foto do restaurante" />
</Restaurant>;