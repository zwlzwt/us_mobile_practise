import React, { useState } from 'react';
import styled from 'styled-components'
import vaild from '../images/Combined_Shape.png'
import cross from '../images/cross.png'
import checkMark from '../images/check.png'
import invaild from '../images/Combined_Shape_red.png'

interface StyledProps {
  readonly widthStyle: string,
  readonly marginValue: string
};

interface StyledValue {
  readonly value: string
}

interface StyleError {
  readonly value: string,
  readonly error: string | undefined
}

const InputGroup = styled.div<StyledProps>`
  position: relative;
  display: ${props => props.widthStyle !== '100%' ? 'inline-flex' : 'flex'};
  flex-direction: column;
  width: ${props => props.widthStyle};
  margin-right: ${props => props.marginValue};
  margin-bottom: 20px;
`

const Label = styled.label`
  height: 31px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;

  letter-spacing: -0.4px;
  @media screen and (max-width: 414px) {
    font-size: 15px;
  }
`
const InputArea = styled.input<StyledValue>`
  box-sizing: border-box;
  border-radius: 10px;
  border: ${props => props.value ? '1px solid #E6E7E8' : 'none'};
  width: 100%;
  height: 50px;
  background: ${props => props.value ? '#fff' : 'rgba(25, 35, 50, 0.06)'};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 32px;
  padding: 8px;
  letter-spacing: -0.4px;

  color: #192332;
  &:focus{
    background: #FFFFFF;
    border: 1px solid #667AF4;
    outline: none;
    box-shadow: 0px 12px 50px rgba(65, 155, 249, 0.08), 0px 2px 10px rgba(159, 159, 164, 0.25);
    border-radius: 10px;
  }
  @media screen and (max-width: 414px) {
    height: 46px;
  }
`

const Hide = styled.button`
  cursor: pointer;
  position: absolute;
  background: transparent;
  bottom: 10px;
  right: 53px;
  width: 39px;
  height: 31px;
  border: none;
  

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 32px;

  text-align: center;
  letter-spacing: 2px;

  color: #667AF4;

  &:focus{
    outline: none;
  }
`
const Error = styled.span`
  position: absolute;
  color: #FF6363;
  bottom: -25px;
  left: 0px;
  font-size: 13.1183px;
  img {
    margin-right: 8px;
  }
`

const CheckVaild = styled.span<StyleError>`
  margin: 8px;
  width: 154.16px;
  height: 27px;

  font-style: normal;
  font-weight: normal;
  font-size: 15.6774px;
  line-height: 28px;

  letter-spacing: -0.348387px;

  img {
    margin-right: 5px;
  }
  @media screen and (max-width: 414px) {
    font-size: 14px;
  }
`
const CheckVaild1 = styled(CheckVaild)`
  color: ${props => !props.value ? '#192332' : (props.error === '2' || props.error === '12' ? '#FF6363' : '#76BC7E')}
`
const CheckVaild2 = styled(CheckVaild)`
  color: ${props => !props.value ? '#192332' : (props.error === '1' || props.error === '12' ? '#FF6363' : '#76BC7E')}
`


interface Props {
  label: string,
  hide?: boolean,
  error?: string,
  check?: boolean,
  type: string,
  margin?: string,
  widthStyle: string,
  value: string,
  name: string,
  handleChange: Function
}

const Input = ({ 
  label, 
  hide=false, 
  error, 
  type, 
  check=false, 
  widthStyle, 
  margin='0',
  value,
  name,
  handleChange
}: Props) => {
  const [switchStatus, setStatus] = useState(false)
  return (
    <>
      <InputGroup widthStyle={widthStyle} marginValue={margin}>
        <Label>
          {label}
        </Label>
        <InputArea 
          value={value} 
          onChange={e => handleChange(e, name)} 
          type={switchStatus ? 'password' : type}
          />
        {hide ? <Hide onClick={() => setStatus(!switchStatus)}>{switchStatus ?  'Show' : 'Hide'}</Hide> : null}
        {error && name!=='password' ? <Error><img src={cross} alt="cross"/>{error}</Error> : null}
      </InputGroup>
      
      {check 
            ? <CheckVaild1 value={value} error={error}>
              {
                !value 
                ? <img src={vaild} alt='valid' />
                : (
                  error === '2' || error ==='12'
                  ?
                  <img src={invaild} alt='invaild' />
                  :
                  <img src={checkMark} alt='checkMark' />
                )
              }
              At least 8 characters</CheckVaild1> 
            : null}
      {check 
          ? <CheckVaild2 value={value} error={error}>
              {
                !value
                ? <img src={vaild} alt='valid' />
                : (
                  error === '1' || error ==='12'
                  ?
                  <img src={invaild} alt='invaild' />
                  :
                  <img src={checkMark} alt='checkMark' />
                  )
              }
              One number</CheckVaild2> 
          : null}
      
    </>
  )
}

export default Input