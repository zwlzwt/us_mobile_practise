import React from 'react';
import styled from 'styled-components'

const CheckInput = styled.div`
  display: flex;
  padding-top: 20px;
  align-items: center;
  margin-top: 18px;
  border-top: 1px solid rgba(25, 35, 50, 0.1);
  input {
    width: 20px;
    height: 20px;
  }
`

const CheckPolicy = styled.p`
  margin-left: 15px;
  display:inline-block;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;

  letter-spacing: -0.4px;

  color: #192332;
   @media screen and (max-width: 414px) {
     font-size: 18px;
     margin-left: 10px;
   }
`

interface Props {
  checked: boolean,
  onChange: Function
}


const CheckBox = ({
  checked,
  onChange
}: Props) => {
  return (
    <CheckInput>
      <input type='checkbox' checked={checked} onChange={() => onChange()}/>
      <CheckPolicy>Agree to the Terms ℇ Privacy policy</CheckPolicy>
    </CheckInput>
  )
}

export default CheckBox