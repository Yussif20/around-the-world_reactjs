/* eslint-disable react/prop-types */
import CountryCard from './CountryCard';
import EmptySearch from './EmptySearch';

const CountryList = ({ countries }) => {
  return (
    <div className="max-w-full mx-auto mt-12 grid place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-12">
      {countries && countries.length !== 0 ? (
        countries.map((country) => {
          return (
            <CountryCard
              key={country.name.official}
              flag={country.flags.svg}
              name={country.name.common}
              capital={country.capital}
              population={country.population}
              region={country.region}
            />
          );
        })
      ) : (
        <EmptySearch />
      )}
    </div>
  );
};

export default CountryList;
