import { useEffect } from 'react';
import GuessesGrid from './components/GuessesGrid';
import Header from './components/Header';
import Keyboard from './components/Keyboard';
import { useCurrentWord } from './contexts/CurrentWord';
import { useLettersNumber } from './contexts/LettersNumber';
import words from './static/words';

const App: React.FC = () => {
  const { setCurrentWord } = useCurrentWord();
  const { setLettersNumber } = useLettersNumber();

  useEffect(() => {
    const fiveLelltersWords = words.filter((word) => {
      if (word.length === 5) return true;
    });
    setCurrentWord(fiveLelltersWords[~~(Math.random() * fiveLelltersWords.length)]);
    setLettersNumber(5);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='flex h-screen flex-col items-center justify-between gap-y-6 py-5'>
      <Header />
      <GuessesGrid />
      <Keyboard />
    </div>
  );
};

export default App;
