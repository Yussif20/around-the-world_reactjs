import CountryList from '../components/CountryList';
import RegionMenu from '../components/RegionMenu';
import SearchBar from '../components/SearchBar';
import ErrorMessage from '../components/ErrorMessage';
import useFetchData from '../hooks/useFetchData';

export const Home = () => {
  const {
    isLoading,
    isError,
    result,
    filteredCountries,
    setFilteredCountries,
  } = useFetchData();

  return (
    <>
      {isLoading && <ErrorMessage message={'Data is Loading...'} />}
      {isError && <ErrorMessage message={'Something went wrong...'} />}
      {!isError && !isLoading && (
        <>
          <div className="container mx-auto px-5 md:px-8">
            <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
              <SearchBar
                countryList={result}
                setFilteredCountries={setFilteredCountries}
              />
              <RegionMenu
                countryList={result}
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
