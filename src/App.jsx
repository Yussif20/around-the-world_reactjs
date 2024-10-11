import { useEffect, useState } from 'react';
import CountryList from './components/CountryList';
import Header from './components/Header';
import RegionMenu from './components/RegionMenu';
import SearchBar from './components/SearchBar';

function App() {
  const [countriesList, setCountriesList] = useState([]);
  useEffect(() => {
    fetchCountryData();
  }, []);

  const fetchCountryData = () => {
    fetch('https://restcountries.com/v3.1/all').then((res) =>
      res.json().then((data) => {
        console.log(data);
        setCountriesList(data);
      })
    );
  };
  return (
    <div className="min-h-screen w-screen bg-gray-100 font-inter dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <div className="container mx-auto px-5 md:px-8">
        <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
          <SearchBar />
          <RegionMenu />
        </div>
      </div>
      <CountryList countries={countriesList} />
    </div>
  );
}

export default App;
