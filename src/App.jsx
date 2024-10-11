import Header from './components/Header';
import RegionMenu from './components/RegionMenu';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="min-h-screen w-screen bg-gray-100 font-inter dark:bg-gray-900 dark:text-gray-100">
      <Header />
      <div className="container mx-auto px-5 md:px-8">
        <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
          <SearchBar />
          <RegionMenu />
        </div>
      </div>
    </div>
  );
}

export default App;
