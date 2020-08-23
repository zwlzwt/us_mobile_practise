import React, { useState } from 'react';
import styled from 'styled-components'
import logo from '../images/Logo.png'
import Input from './Input'
import CheckBox from'./CheckBox'
import SubmitButton from './SubmitButton'

const Logo = styled.img`
  position: absolute;
  width: 105px;
  height: 46.41px;
  left: 639px;
  top: 112px;
  @media screen and (max-width: 414px) {
    position: absolute;
    width: 99.64px;
    height: 44.04px;
    left: 17px;
    top: 92px;
  }
`

const Title = styled.p`
  position: absolute;
  width: 468px;
  height: 54px;
  left: 639px;
  top: 175px;

  font-style: normal;
  font-weight: bold;
  font-size: 42px;
  line-height: 54px;

  letter-spacing: -1.2px;

  color: #192332;
  @media screen and (max-width: 414px) {
    position: absolute;
    width: 326px;
    height: 34px;
    left: 17px;
    top: 181px;
    font-weight: bold;
    font-size: 32px;
    line-height: 34px;

  }
`

const SubmitForm = styled.div`
  position: absolute;
  width: 468px;
  height: 54px;
  left: 639px;
  top: 240px;
  @media screen and (max-width: 414px) {
    position: absolute;
    left: 18px;
    top: 240px;
    width: 326px;
  }
`

const Form = () => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    checked: false
  })

  const [error, setError] = useState({
    firstNameError: '',
    lastNameError: '',
    emailError: '',
    passwordError: ''
  })
  
  const handleCheckBox = (): void => {
    setValues({
      ...values,
      checked: !values.checked
    })
  }

  const handleChange = (event: any, name: string): void => {
    setValues({
      ...values,
      [name]: event.target.value
    })
    checkVaildInput(name, event.target.value)
  }

  const checkVaildInput = (name: string, value: string): boolean => {
    const reEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;

    const reOneNumber = /^(?=.*[0-9]).*$/;
    const reLeast8 = /^(?=.{8,}).*$/;
    //  You can check any input you want

    switch(name) {
      case 'email':
        if(!reEmail.test(value)) {
          setError({ ...error, emailError: "This email is not correct!" });
          return false;
        } else {
          setError({ ...error, emailError: '' })
          return true;
        }
      case 'firstName':
        if(value.trim().length === 0) {
          setError({ ...error, firstNameError: "FirstName can't be empty!" });
          return false
        } else {
          setError({ ...error, firstNameError: '' })
          return true
        }
      case 'lastName':
        if (value.trim().length === 0) {
          setError({ ...error, lastNameError: "lastName can't be empty!" });
          return false
        } else {
          setError({ ...error, lastNameError: '' })
          return true;
        }
      case 'password':
        if (!reLeast8.test(value) && !reOneNumber.test(value)) {
          setError({ ...error, passwordError: "12" });
          return false
        } else if(!reLeast8.test(value)) {
          setError({...error, passwordError: '2'})
          return false
        } else if (!reOneNumber.test(value)) {
          setError({...error, passwordError: '1'})
          return false
        } else {
          setError({...error, passwordError: ''})
          return true;
        }
      default:
        return true;
    }
  };

  const checkFormVaild = (): boolean => {
    const errorSearch = Object.values(error).every((val) => Boolean(val) === false)
    const valueValid = Object.values(values).every((val) => Boolean(val) !== false)

    return valueValid && errorSearch ? false : true
  }
  
  return (
    <>
      <Logo src={logo} alt='logo' />
      <Title>Start saving today!</Title>
      <SubmitForm>
        <Input
          label={'First Name'}
          error={error.firstNameError}
          type={'text'}
          margin={'15px'}
          widthStyle={'47%'}
          name={'firstName'}
          value={values.firstName}
          handleChange={handleChange}
        />
        <Input
          label={'Last Name'}
          error={error.lastNameError}
          type={'text'}
          widthStyle={'47%'}
          name={'lastName'}
          value={values.lastName}
          handleChange={handleChange}
        />
        <Input
          label={'Email'}
          error={error.emailError}
          type={'text'}
          widthStyle={'100%'}
          name={'email'}
          value={values.email}
          handleChange={handleChange}
        />
        <Input
          label={'Create a password'}
          type={'text'}
          hide={true}
          check={true}
          widthStyle={'100%'}
          name={'password'}
          value={values.password}
          handleChange={handleChange}
          error={error.passwordError}
        />

        <CheckBox
          checked={values.checked}
          onChange={handleCheckBox}
        />
        <SubmitButton values={values} disable={checkFormVaild()}/>
      </SubmitForm>
    </>
  )
}

export default Form