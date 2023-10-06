import React from 'react'
import styled from 'styled-components'

const ModalWrapper = styled.div`
  display: ${props => (props.open ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

const YesButton = styled.button`
  background-color: #28a745;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 30px;
`

const NoButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
`

const DeleteModal = ({ isOpen, setDeleteModalIsOpen, nomeFantasia, handleDeletePerson, id }) => {
  return (
    <ModalWrapper open={isOpen}>
      <ModalContent>
        <p>Tem certeza que deseja deletar o agricultor com o nome fantasia {nomeFantasia}?</p>
        <ButtonWrapper>
          <YesButton onClick={() => {
            handleDeletePerson(id)
            setDeleteModalIsOpen(false)
            alert('Agricultor deletado com sucesso!')
          }}>Sim</YesButton>
          <NoButton onClick={() => setDeleteModalIsOpen(false)}>Não</NoButton>
        </ButtonWrapper>
      </ModalContent>
    </ModalWrapper>
  )
}

export default DeleteModal
