const Country = ({ country, showSelectedCountry }) => (
	<p>
		{country.name.common}
		<button onClick={showSelectedCountry}>show</button>
	</p>
)

const Countries = ({ countries, showSelectedCountry }) => {
	if (typeof countries === 'string') return countries 
	
	return (
		<div>
			{countries.map(country => (
				<Country 
					key={country.name.common} 
					country={country} 
					showSelectedCountry={() => showSelectedCountry(country)}
				/>
			))}
		</div>
	)
}

export default Countries