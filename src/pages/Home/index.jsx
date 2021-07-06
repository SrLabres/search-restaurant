import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick'
import TextField, { HelperText, Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import Deafultrestaurante from '../../assets/restaurante-fake.png'

import {ImageCard, RestauranteCard, Modal, Map} from '../../components'
import { Container, Search, Logo, Wrapper, CarroselTitle, Carrosel} from './style';

export const Home = () => {
  const {restaurants} = useSelector((state) => state.restaurants);
  const [inputValue, setInputValue] = useState('');
  const [query, setQuery] = useState('')
  const [modalOpen, setModalOpen] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true
  };

  function handleKeyPress(e){
    if (e.key === 'Enter'){
      setQuery(inputValue)
    }
  }


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
          <Input value={inputValue} onKeyPress={handleKeyPress} onChange={(e) => setInputValue(e.target.value)} />
        </TextField>
        <CarroselTitle>Na sua Área</CarroselTitle>
        <Carrosel {...settings}>
        {restaurants.map((restaurante) => (<ImageCard key={restaurante.place_id} photo={restaurante.photos ? restaurante.photos[0].getUrl() : Deafultrestaurante} title={restaurante.name} />))}
        </Carrosel>
        <button onClick={() => setModalOpen(true)}>Abrir Modal</button>
      </Search>
      {restaurants.map((restaurante) => (<RestauranteCard restaurante={restaurante} />))}
    </Container>
    <Map query={query} />
   {// <Modal open={modalOpen} onclose={() => setModalOpen(!modalOpen)}/>
   }
    </Wrapper>
  );
};
