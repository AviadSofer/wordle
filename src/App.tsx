import GuessesGrid from './components/GuessesGrid';
import Header from './components/Header';
import Keyboard from './components/Keyboard';

const App: React.FC = () => {
  return (
    <div className='flex h-screen flex-col items-center justify-between gap-y-6 py-5'>
      <Header />
      <GuessesGrid />
      <Keyboard />
    </div>
  );
};

export default App;
