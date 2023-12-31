import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => (
	axios
		.get(baseUrl)
		.then(response => response.data)
)

const addPerson = (personObject) => (
	axios.post(baseUrl, personObject)
		.then(response => response.data)
)

const deletePerson = (id) => axios.delete(`${baseUrl}/${id}`)

const updatePerson = (person, updatedPersonObject) => {
  const request = axios.put(`${baseUrl}/${person.id}`, updatedPersonObject)
  return request.then(response => response.data)
}

export default { getAll, addPerson, deletePerson, updatePerson }