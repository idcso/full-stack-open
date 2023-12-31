const Person = ({ name, number, deletePerson }) => (
	<p>
		{name} {number}
		<button onClick={deletePerson}>delete</button>
	</p>
)

const Persons = ({ persons, newFilter, deletePerson }) => (
	persons
		.filter(person => person.name.toLowerCase().includes(newFilter))
		.map(person => {
			return (
				<Person 
					key={person.name} 
					name={person.name} 
					number={person.number} 
					deletePerson={() => deletePerson(person)} 
				/>
			)
		})
)

export default Persons