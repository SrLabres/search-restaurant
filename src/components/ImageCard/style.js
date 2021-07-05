import styled from 'styled-components'

export const Card = styled.div `
  display: flex;
  justify-content: center;
  width: 90px;
  height: 90px;
  border-radius: 6px;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  margin-right: 15px;
  padding: 5px;
`

export const Title = styled.span `
  font-family: ${(props) => props.theme.regular};
  color: #fff;
  font-size: 16px;

`