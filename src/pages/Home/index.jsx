import React, { useState } from 'react';
import Slider from 'react-slick'
import TextField, { HelperText, Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurantes from '../../assets/restaurante-fake.png'

import {ImageCard, RestauranteCard, Modal, Map} from '../../components'
import { Container, Search, Logo, Wrapper, CarroselTitle, Carrosel} from './style';

export const Home = () => {
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
        <button onClick={() => setModalOpen(true)}>Abrir Modal</button>
      </Search>
      <RestauranteCard></RestauranteCard>
    </Container>
    <Map query={query} />
   {// <Modal open={modalOpen} onclose={() => setModalOpen(!modalOpen)}/>
   }
    </Wrapper>
  );
};
