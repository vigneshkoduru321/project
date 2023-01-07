import styled from 'styled-components'

export const TitleTrendCard = styled.p`
  color: ${props => (props.islight ? 'black' : 'white')};
  font-family: 'Roboto';
  font-weight: 600;
`

export const ParaTrendCard = styled.p`
  color: ${props => (props.islight ? 'black' : 'white')};
  font-family: 'Roboto';
  font-weight: 400;
`