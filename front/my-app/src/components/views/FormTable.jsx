import React, { useState } from 'react'
import styled from 'styled-components'
import DeleteModal from './DeleteModal'
import FormModal from './FormModal'

const CustomTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`

const TableHeader = styled.th`
  background-color: #f2f2f2;
  font-weight: bold;
  padding: 10px;
  border: 1px solid #ddd;
`

const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`

const OddTableRow = styled.tr`
  background-color: #f9f9f9;
`

const ActionCell = styled.td`
  text-align: center;
  border: 1px solid #ddd;
`

const ActionButton = styled.button`
  background-color: ${props => props.delete ? '#dc3545' : '#007bff'};
  color: #fff;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: background-color 0.2s ease-in-out;
  
  &:hover {
    background-color: ${props => props.delete ? '#c82333' : '#0056b3'};
  }
`

const FormTable = ({ people, handleDeletePerson, formHasBeenSubmited, setFormHasBeenSubmited, onEditPerson }) => {
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false)
  const [editModalIsOpen, setEditModalIsOpen] = useState(false)
  const [selectedPerson, setSelectedPerson] = useState(null)

  const handleDeleteClick = (person) => {
    setSelectedPerson(person)
    setDeleteModalIsOpen(true)
  }

  const handleEditClick = (person) => {
    setSelectedPerson(person)
    setEditModalIsOpen(true)
  }

  const handleEditPerson = (value) => {
    if (value.target.name === 'celular' && value.target.value.length > 12) {
      return
    }
    if (value.target.name === 'cnpjCpf' && value.target.value.length > 14) {
      return
    }

    setSelectedPerson((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value
    }))
  }

  return (
    <>
      <CustomTable>
        <thead>
          <tr>
            <TableHeader>Razão Social</TableHeader>
            <TableHeader>Nome Fantasia</TableHeader>
            <TableHeader>CNPJ/CPF</TableHeader>
            <TableHeader>Celular</TableHeader>
            <TableHeader>Cidade</TableHeader>
            <TableHeader>Estado</TableHeader>
            <TableHeader>Ação</TableHeader>
          </tr>
        </thead>
        <tbody>
          {people?.map((person, index) => (
            <OddTableRow key={index}>
              <TableCell>{person.razaoSocial}</TableCell>
              <TableCell>{person.nomeFantasia}</TableCell>
              <TableCell>{person.cnpjCpf}</TableCell>
              <TableCell>{person.celular}</TableCell>
              <TableCell>{person.cidade}</TableCell>
              <TableCell>{person.estado}</TableCell>
              <ActionCell>
                <ActionButton className="edit" onClick={() => handleEditClick(person)}>Editar</ActionButton>
                <ActionButton onClick={() => handleDeleteClick(person)} delete>Excluir</ActionButton>
              </ActionCell>
            </OddTableRow>
          ))}
        </tbody>
      </CustomTable>
      {deleteModalIsOpen && selectedPerson && (
        <DeleteModal
          isOpen={deleteModalIsOpen}
          setDeleteModalIsOpen={setDeleteModalIsOpen}
          nomeFantasia={selectedPerson.nomeFantasia}
          id={selectedPerson.idperson}
          handleDeletePerson={handleDeletePerson}
        />
      )}
            {editModalIsOpen && selectedPerson && (
      <FormModal
          onAddPerson={() => onEditPerson(selectedPerson, selectedPerson.idperson)}
          setFormHasBeenSubmited={setFormHasBeenSubmited}
          formHasBeenSubmited={formHasBeenSubmited}
          person={selectedPerson}
          modalIsOpen={editModalIsOpen}
          closeModal={() => {
            setEditModalIsOpen(false)
            setFormHasBeenSubmited(false)
          }}
          handleSetPerson={handleEditPerson}
          isUpdate
           />
            )}
    </>
  )
}

export default FormTable
