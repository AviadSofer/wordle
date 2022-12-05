import Footer from './components/Footer';
import GameOverMessage from './components/GameOverMessage';
import GuessesGrid from './components/GuessesGrid';
import Header from './components/Header';
import Keyboard from './components/Keyboard';

const App: React.FC = () => {
  return (
    <div
      style={{ height: innerHeight }}
      className='relative flex h-screen flex-col items-center gap-y-3 px-2 py-7 md:justify-between md:py-3'
    >
      <Header />
      <GuessesGrid />
      <Keyboard />
      <GameOverMessage />
      <Footer />
    </div>
  );
};

export default App;
