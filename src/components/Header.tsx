import { Settings, Filter } from 'lucide-preact';

const Header = () => {
  return (
    <header className='flex items-center py-4'>
      <h1 className='flex-grow mr-5 text-2xl font-bold'>Projects</h1>

      <button className='mr-5 duration-300 ease-in-out hover:text-pink-600'>
        <Filter />
      </button>
      <button className='duration-300 ease-in-out hover:text-pink-600'>
        <Settings />
      </button>
    </header>
  );
};

export default Header;
