import { useEffect, useState } from 'react';
import CountryList from './components/CountryList';
import Header from './components/Header';
import RegionMenu from './components/RegionMenu';
import SearchBar from './components/SearchBar';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [countriesList, setCountriesList] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    fetchCountryData();
  }, []);

  const fetchCountryData = () => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) =>
        res.json().then((data) => {
          setCountriesList(data);
          setFilteredCountries(data);
        })
      )
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="min-h-screen w-screen bg-gray-100 font-inter dark:bg-gray-900 dark:text-gray-100">
      <Header />
      {isLoading && <ErrorMessage message={'Data is Loading...'} />}
      {isError && <ErrorMessage message={'Something went wrong...'} />}
      {!isError && !isLoading && (
        <>
          <div className="container mx-auto px-5 md:px-8">
            <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
              <SearchBar
                countryList={countriesList}
                setFilteredCountries={setFilteredCountries}
              />
              <RegionMenu
                countryList={countriesList}
                setFilteredCountries={setFilteredCountries}
              />
            </div>
          </div>
          <CountryList countries={filteredCountries} />
        </>
      )}
    </div>
  );
}

export default App;
