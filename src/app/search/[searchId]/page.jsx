import Results from '@/components/Results';

export default async function SearchPage({ params }) {
  const seachTerm = params.searchId;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${"252510abb0780120fe50f80c74f59f72"}&query=${seachTerm}&language=en-US&page=1&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results &&
        results.length ===
        <h1 className='text-center pt-6'>No results found</h1>}
      {results && <Results results={results} />}
    </div>
  );
}