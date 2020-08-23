import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../images/Logo.png'
import Form from './Form';
import Background from '../images/background_copy.png'


const Img = styled.img`
  position: absolute;
  width: 158.37px;
  height: 70px;
  left: 639px;
  top: 263px;
   @media screen and (max-width: 414px) {
    position: absolute;
    width: 99.64px;
    height: 44.04px;
    left: 17px;
    top: 92px;
  }
`

const BackG = styled.img`
  position: absolute;
  opacity: 0.25;
  bottom: 0;
  right: 0;
`

const Title = styled.p `
  position: absolute;
  width: 560px;
  height: 54px;
  left: 639px;
  top: 386px;

  font-style: normal;
  font-weight: bold;
  font-size: 52px;
  line-height: 54px;

  letter-spacing: -1.2px;

  color: #192332;

   @media screen and (max-width: 414px) {
    width: 326px;
    height: 34px;
    left: 17px;
    top: 181px;

    font-size: 32px;
    line-height: 34px;

    letter-spacing: -0.755024px;
  }

  
`

const Content = styled.p`
  position: absolute;
  width: 657px;
  height: 65px;
  left: 639px;
  top: 455px;

  font-style: normal;
  font-weight: normal;
  font-size: 26px;
  line-height: 32px;

  letter-spacing: -1.0152px;

  color: #586271;
  b {
    font-family: GT Walsheim Pro
  }

   @media screen and (max-width: 414px) {
    width: 324px;
    height: 72px;
    left: 17px;
    top: 265px;

    font-size: 18px;
    line-height: 24px;

    letter-spacing: -0.63875px;

    color: #586271;
  }
`

const Button = styled.button`
  position: absolute;
  left: 639px;
  top: 568px;

  font-style: normal;
  font-size: 16px;
  border: none;
  padding: 13.5px 79px;
  weight: 229px;
  margin: 0;
  text-decoration: none;

  text-align: center;
  letter-spacing: 0.785143px;
  text-transform: uppercase;

  color: #FFFFFF;
  background: #667AF4;
  border-radius: 41.8743px;

  @media screen and (max-width: 414px) {
    left: 17px;
    top: 395px;
    padding: 8.5px 126px;
    border-radius: 32px;
  }
`


const MainHome = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      {
        toggle
          ? <Form></Form>
          : 
          <>
            <Img src={logo} alt='logo' />
            <Title>Welcome to US Mobile</Title>
            <Content>
              Custome ℇ unlimited prepaid plans for everyone on the <b>2
              best LTE networks</b> in America.
            </Content>
            <BackG src={Background} alt='Background'/>
            <Button onClick={() => setToggle(true)}>SIGN UP</Button>
          </>
        }
    </>
  )
}

export default MainHome