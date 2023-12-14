import './search.css'

const Search = ({ search, setSearch }) => {
	return (
		<form
			className='search'
			onSubmit={(e) => e.preventDefault()}
		>
			<input
				id='search'
				type='text'
				role='searchbox'
				placeholder='Search'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
		</form>
	);
};
export default Search;
