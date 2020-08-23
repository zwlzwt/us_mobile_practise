import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

interface StyledProps {
  readonly disabled: boolean
}

const Button = styled.button<StyledProps>`
  width: 100%;
  height: 41px;
  background: ${props => props.disabled ? 'rgba(25, 35, 50, 0.1)' : 'rgba(102, 122, 244, 0.85)'};
  margin-top: 20px;
  border-radius: 37.4857px;
  border: none;

  font-weight: bold;
  font-size: 14.0571px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.702857px;
  text-transform: uppercase;

  color: #FFFFFF;
  &:focus {
    outline: none;
  }
   @media screen and (max-width: 414px) {
     margin-bottom: 30px;
   }
`

interface Props{
  values: any,
  disable: boolean
}
const SubmitButton = ({
  values,
  disable
}: Props) => {

  const submitForm = (val: any): void => {
    if(val.checked) delete val.checked
    axios.post('http://127.0.0.1:3002/submit', {
      ...val
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Button disabled={disable} onClick={() => submitForm(values)}>
      Create an account
    </Button>
  )
}

export default SubmitButton;