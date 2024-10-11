import { useEffect, useState } from 'react';
import CountryList from '../components/CountryList';
import RegionMenu from '../components/RegionMenu';
import SearchBar from '../components/SearchBar';
import ErrorMessage from '../components/ErrorMessage';

export const Home = () => {
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
    <>
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
    </>
  );
};
