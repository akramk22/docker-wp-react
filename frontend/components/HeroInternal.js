import react, { Component } from 'react';
import styled from 'styled-components';


const HeroInternalWrapper = styled.div`
  background: url('/static/images/internal-hero.jpg');
  // background: url('/static/images/internal-hero.webp');
  background-size: cover;
  background-repeat: none;
  height: 500px;
  width: 100%;
  margin-top: -150px;
`


class HeroInternal extends Component {
  render() {
    return (
      <HeroInternalWrapper>

      </HeroInternalWrapper>
    )
  }
}




export default HeroInternal
