import React from 'react';
import {Card, Title} from './style'


export const ImageCard = ({photo, title}) => <Card photo={photo}><Title>{title}</Title></Card>;

