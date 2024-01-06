const Form = ({ country, handleCountryChange }) => (
	<form>
		<div>
			find countries
			<input value={country} onChange={handleCountryChange} />
		</div>
	</form>
)

export default Form