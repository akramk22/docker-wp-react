import react, { Component } from 'react';
import styled, {ThemeProvider} from 'styled-components';
import Link from "next/link";
import { theme } from '../src/styles/theme'

const HeroWrapper = styled.div`
  background: url('/static/images/home-hero.jpg');
  // background: url('/static/images/home-hero.webp');
  background-size: cover;
  background-repeat: none;
  height: 900px;
  width: 100%;
  margin-top: -150px;
  display: flex;
  align-items: center;
`
const Wrapper = styled.div`
 width: 1280px;
 max-width: 1280px;
 margin: auto;
 display: flex;
 flex-direction: flex-start;
`

const HeroCTA = styled.div`
  h1 {
    color: ${props => props.theme.white};
    font-size: 42px;
    font-weight: 400;
    em {
      font-weight: 700;
    }
  }
`

const Btnrow = styled.div`
  display: flex;
  justify-content: space-between;
`



class Hero extends Component {
  render() {
    return (
      <HeroWrapper>
        <ThemeProvider theme={theme}>
        <Wrapper>
          <HeroCTA>
            <h1>The <em>No Suprise</em> Guys™</h1>
            <span>Hometown residential experts in plumbing, windows heating and air</span>
            <Btnrow>
              <div>
                <Link href="/our-services">
                    <a>Our Services</a>
                </Link>
              </div>
              <div>
                <Link href="/request-service">
                    <a>Request Service</a>
                </Link>
              </div>
            </Btnrow>
          </HeroCTA>
          <div style={{width: '50%'}}></div>
        </Wrapper>
      </ThemeProvider>
      </HeroWrapper>
    )
  }
}




export default Hero
