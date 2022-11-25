import { useCurrentWord } from '~/contexts/CurrentWord';
import { useGuesses } from '~/contexts/Guesses';
import { useState, useEffect } from 'react';
import getRandomWord from '~/helpers/getRandomWord';
import { Link } from 'react-router-dom';

const GameOverMessage: React.FC = () => {
  const { guesses, setGuesses } = useGuesses();
  const { currentWord, setCurrentWord } = useCurrentWord();

  const [display, setDisplay] = useState('hidden');
  const [bgColor, setBgColor] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    guesses.map((guess) => {
      // Win
      if (guess.length === currentWord.length + 2 && currentWord.includes(guess.slice(0, -2))) {
        setDisplay('flex');
        setBgColor('bg-green-400');
        setMsg('גילית את המילה!');

        // Lost
      } else if (guesses.every((guess) => guess.length === currentWord.length + 2)) {
        setDisplay('flex');
        setBgColor('bg-red-400');
        setMsg('נכשלת :(');
      }
    });
  }, [guesses, currentWord]);

  const newGameHandle = () => {
    setDisplay('hidden');
    setCurrentWord(getRandomWord(5));
    setGuesses(new Array(6).fill(''));
  };

  return (
    <div
      className={`${display} absolute top-0 bottom-0 my-auto h-full w-full items-center justify-center`}
    >
      <div
        className={`${bgColor} flex h-2/5 w-1/3 flex-col items-center justify-center gap-7 rounded-md shadow-2xl`}
      >
        <h1 className='text-4xl font-bold text-white'>{msg}</h1>
        <h2 className='text-2xl font-bold text-white'>המילה הנכונה: {currentWord}</h2>
        <Link to={'/'}>
          <button onClick={newGameHandle} className='rounded-lg bg-white py-1 px-3 text-font'>
            משחק חדש
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GameOverMessage;
