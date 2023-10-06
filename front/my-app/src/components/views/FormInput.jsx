import React from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
margin-top: 30px;
margin-bottom: 30px;
height: 30px;
`

const Input = styled.input`
  width: 300px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  
  &::-webkit-inner-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
} 
&::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
  

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  ${({ withError }) =>
    withError &&
    css`
      border-color: red;
    `}
`

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`

const FormInput = ({ type, name, placeholder, onChange, value, withError, errorMessage, maxLenght }) => {
  return (
    <Container style={{ marginTop: 30, marginBottom: 30, height: 30 }}>
      <Input
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        className="register-input"
        onChange={onChange}
        withError={withError}
        maxlength={maxLenght}
      />
      {withError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Container>
  )
}

export default FormInput
