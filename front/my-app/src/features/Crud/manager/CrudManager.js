import CrudRepository from '../repository/CrudRepository'

class CrudManager {
  async getAllPeople () {
    const repository = new CrudRepository()
    try {
      const people = await repository.getMany()
      return people
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  async createPerson (person) {
    const repository = new CrudRepository()
    try {
      const newPerson = await repository.create(person)
      return newPerson
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  async updatePerson (id, person) {
    const repository = new CrudRepository()
    try {
      const updatedPerson = await repository.update(id, person)
      return updatedPerson
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  async deletePerson (id) {
    const repository = new CrudRepository()
    try {
      const deletedPerson = await repository.delete(id)
      return deletedPerson
    } catch (error) {
      return { success: false, error: error.message }
    }
  }
}

export default CrudManager
