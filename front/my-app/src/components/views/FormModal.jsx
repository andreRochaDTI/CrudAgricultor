import React from 'react'
import styled from 'styled-components'
import FormInput from './FormInput'
import FormButton from './FormButton'
import SelectState from './SelectState'
import { isValidCPF, isValidCNPJ } from '../../features/Crud/utils/index'

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

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`

const FormModal = ({ modalIsOpen, handleSetPerson, closeModal, person, formHasBeenSubmited, setFormHasBeenSubmited, onAddPerson, isUpdate }) => {
  const isValidPerson = () => {
    const { razaoSocial, nomeFantasia, cnpjCpf, cidade, estado } = person
    if (!razaoSocial || !nomeFantasia || !cnpjCpf || !cidade || !estado) {
      return false
    }

    const isCPFValid = isValidCPF(cnpjCpf)
    const isCNPJValid = isValidCNPJ(cnpjCpf)

    if (!isCPFValid && !isCNPJValid) {
      return false
    }

    return true
  }

  const getCnpjCpfErrorMessage = () => {
    const isCPFValid = isValidCPF(person.cnpjCpf)
    const isCNPJValid = isValidCNPJ(person.cnpjCpf)
    if (!person.cnpjCpf) {
      return 'O campo CPF/CNPJ não pode ser vazio'
    }
    if (!isCPFValid && !isCNPJValid) {
      return 'CPF/CNPJ inválido'
    }
  }

  const handleClick = () => {
    setFormHasBeenSubmited(true)
    if (isValidPerson()) {
      onAddPerson(person)
      if (isUpdate) { alert('Agricultor alterado com sucesso!') } else { alert('Agricultor cadastrado com sucesso!') }
      closeModal()
    }
  }

  return <ModalWrapper open={modalIsOpen}>
  <ModalContent>
    <CloseButton onClick={closeModal}>&times;</CloseButton>
    <FormInput
    type="text"
    placeholder="Razão Social*"
    name="razaoSocial"
    onChange={handleSetPerson}
    value={person.razaoSocial}
    withError={!person.razaoSocial && formHasBeenSubmited}
    errorMessage="O campo razão social não pode ser vazio"
    maxLenght={30}
  />
  <FormInput
    type="text"
    placeholder="Nome Fantasia*"
    name="nomeFantasia"
    onChange={handleSetPerson}
    value={person.nomeFantasia}
    withError={!person.nomeFantasia && formHasBeenSubmited}
    errorMessage="O campo nome fantasia não pode ser vazio"
    maxLenght={30}
  />
  <FormInput
    type="number"
    placeholder="CNPJ/CPF"
    name="cnpjCpf"
    onChange={handleSetPerson}
    value={person.cnpjCpf}
    withError={(!isValidCPF(person.cnpjCpf) || !isValidCNPJ(person.cnpjCpf)) && formHasBeenSubmited && getCnpjCpfErrorMessage()}
    errorMessage={getCnpjCpfErrorMessage()}
  />
  <FormInput
    type="number"
    placeholder="Celular"
    name="celular"
    onChange={handleSetPerson}
    value={person.celular}
  />
   <FormInput
    type="text"
    placeholder="Cidade*"
    name="cidade"
    onChange={handleSetPerson}
    value={person.cidade}
    withError={!person.cidade && formHasBeenSubmited}
    errorMessage="O campo cidade não pode ser vazio"
    maxLenght={30}
  />
  <SelectState onChange={handleSetPerson} value={person.estado} />
  <FormButton text={isUpdate ? 'Atualizar' : 'Cadastrar'} onClick={() => handleClick()} />
  </ModalContent>
</ModalWrapper>
}

export default FormModal
