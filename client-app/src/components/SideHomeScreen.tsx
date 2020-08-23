import React from 'react';
import styled from 'styled-components';
import backgroundImg from '../images/landing-hero-mobile.png';
import twitter from '../images/Twitter.png';
import instagram from '../images/Instagram.png';
import linkedin from '../images/Linkedin.png';
import facebook from '../images/Facebook.png';


const Background = styled.aside`
  display: inline-block;
  width: 427.14px;
  height: 100vh;
  background: no-repeat center url(${backgroundImg});
  background-size: 100% 100%;

  @media screen and (max-width: 414px) {
    display: none;
  }
`

const Title = styled.div`
  display: flex;
  margin-top: 86px;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  align-items: center;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 29px;
  letter-spacing: -1.2px;
`

const AboutUs = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  bottom: 42px;
  width: 427.14px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  letter-spacing: 0.6px;
  text-transform: uppercase;

  color: #FFFFFF;

  img {
    margin-left: 12px;
  }
`


const SideHomeScreen = () => {
  return (
    <Background>
      <Title>
        <span>A few clicks away from your</span>
        <span>US Mobile account</span>
      </Title>

      <AboutUs>
        <p>About us Mobile</p>
        <div>
          <img src={twitter} alt='twitter'/>
          <img src={linkedin} alt='linkedin'/>
          <img src={facebook} alt='facebook'/>
          <img src={instagram} alt='instagram'/>
        </div>
      </AboutUs>
    </Background>
  )
}

export default SideHomeScreen