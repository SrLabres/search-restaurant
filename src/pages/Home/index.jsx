import React, { useState } from 'react';
import Slider from 'react-slick'
import TextField, { HelperText, Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurantes from '../../assets/restaurante-fake.png'

import {ImageCard, RestauranteCard} from '../../components'
import { Container, Search, Logo, Wrapper, Map, CarroselTitle, Carrosel} from './style';

export const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true
  };
  return (
    <Wrapper>
      <Container>
      <Search>
        <Logo src={logo} alt="Logo do restaurante" />
        <TextField
          label="Pesquisar Restaurantes"
          outlined
          // onTrailingIconSelect={() => this.setState({value: ''})}
          trailingIcon={<MaterialIcon role="button" icon="search" />}>
          <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </TextField>
        <CarroselTitle>Na sua Área</CarroselTitle>
        <Carrosel {...settings}>
          <ImageCard photo={restaurantes} title='J'/>
          <ImageCard photo={restaurantes} title='J'/>
          <ImageCard photo={restaurantes} title='J'/>
          <ImageCard photo={restaurantes} title='J'/>
          <ImageCard photo={restaurantes} title='J'/>
          <ImageCard photo={restaurantes} title='J'/>
          <ImageCard photo={restaurantes} title='J'/>
          <ImageCard photo={restaurantes} title='J'/>
          <ImageCard photo={restaurantes} title='J'/>
          <ImageCard photo={restaurantes} title='J'/>
        </Carrosel>
      </Search>
      <RestauranteCard></RestauranteCard>
    </Container>
    <Map />
    </Wrapper>
  );
};
