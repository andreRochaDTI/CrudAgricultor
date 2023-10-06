/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import TitlePage from '../../../components/views/TitlePage'
import FormButton from '../../../components/views/FormButton'
import FormModal from '../../../components/views/FormModal'
import FormTable from '../../../components/views/FormTable'
import CrudManager from '../manager/CrudManager'

const CrudPage = () => {
  const [person, setPerson] = useState({
    razaoSocial: '',
    nomeFantasia: '',
    cnpjCpf: '',
    celular: '',
    cidade: '',
    estado: 'AC'
  })

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [formHasBeenSubmited, setFormHasBeenSubmited] = useState(false)
  const [formHasBeenSent, setFormHasBeenSent] = useState(false)
  const [people, setPeople] = useState([])
  const manager = new CrudManager()

  useEffect(() => {
    manager.getAllPeople().then((response) => {
      setPeople(response.data)
    })
  }, [])

  useEffect(() => {
    if (formHasBeenSent) {
      manager.getAllPeople().then((response) => {
        setPeople(response.data)
      })
      setFormHasBeenSent(false)
    }
  }, [formHasBeenSent])

  const openModal = () => {
    setPerson({
      razaoSocial: '',
      nomeFantasia: '',
      cnpjCpf: '',
      celular: '',
      cidade: '',
      estado: 'AC'
    })
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    setFormHasBeenSubmited(false)
  }

  const onAddPerson = (person) => {
    manager.createPerson(person).then(() => {
      setFormHasBeenSent(true)
    })
  }

  const onEditPerson = (person, id) => {
    manager.updatePerson(id, person).then(() => {
      setFormHasBeenSent(true)
    })
  }

  const onDeletePerson = (id) => {
    manager.deletePerson(id).then(() => {
      setFormHasBeenSent(true)
    })
  }

  const handleSetPerson = (value) => {
    if (value.target.name === 'celular' && value.target.value.length > 12) {
      return
    }
    if (value.target.name === 'cnpjCpf' && value.target.value.length > 14) {
      return
    }

    setPerson((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value
    }))
  }

  return (<div className="App">
    <TitlePage/>
    <div className="register-container">
        <div>
      <FormButton text="Cadastrar novo agricultor" onClick={() => openModal()} />
      <FormModal onAddPerson={onAddPerson} setFormHasBeenSubmited={setFormHasBeenSubmited} formHasBeenSubmited={formHasBeenSubmited} person={person} modalIsOpen={modalIsOpen} closeModal={closeModal} handleSetPerson={handleSetPerson} />
      </div>
      <FormTable people={people} handleDeletePerson={onDeletePerson} onEditPerson={onEditPerson} setFormHasBeenSubmited={setFormHasBeenSubmited} formHasBeenSubmited={formHasBeenSubmited} person={person} modalIsOpen={modalIsOpen} closeModal={closeModal} handleSetPerson={handleSetPerson} />
    </div>
  </div>)
}

export default CrudPage
