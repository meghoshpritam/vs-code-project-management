import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <ChakraProvider>
      <main className='container px-4 mx-auto'>
        <Header />
        <Projects />
      </main>
    </ChakraProvider>
  );
}

export default App;
