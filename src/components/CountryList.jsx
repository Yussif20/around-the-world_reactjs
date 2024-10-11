/* eslint-disable react/prop-types */
import CountryCard from './CountryCard';
import EmptySearch from './EmptySearch';

const CountryList = ({ countries }) => {
  return (
    <div className="max-w-full mx-auto mt-8 grid gap-x-[70px] gap-y-12 md:mt-12 md:grid-cols-[repeat(2,minmax(0,_auto))] lg:grid-cols-[repeat(4,minmax(0,_auto))] lg:gap-y-[70px]">
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
