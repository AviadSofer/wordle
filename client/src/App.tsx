import GameOverMessage from './components/GameOverMessage';
import GuessesGrid from './components/GuessesGrid';
import Header from './components/Header';
import Keyboard from './components/Keyboard';

const App: React.FC = () => {
  return (
    <div
      style={{ height: innerHeight }}
      className='relative flex h-screen flex-col items-center justify-between px-2 py-7 md:gap-y-6 md:py-5'
    >
      <Header />
      <GuessesGrid />
      <Keyboard />
      <GameOverMessage />
    </div>
  );
};

export default App;
