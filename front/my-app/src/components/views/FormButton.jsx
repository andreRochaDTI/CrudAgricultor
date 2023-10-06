import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`

const FormButton = ({ text, onClick }) => {
  return (
    <StyledButton onClick={onClick} className="register-button" type="submit">
      {text}
    </StyledButton>
  )
}

export default FormButton
