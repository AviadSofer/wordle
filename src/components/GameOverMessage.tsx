import { useCurrentWord } from '~/contexts/CurrentWord';
import { useGuesses } from '~/contexts/Guesses';
import { useState, useEffect } from 'react';

const GameOverMessage: React.FC = () => {
  const { guesses } = useGuesses();
  const { currentWord } = useCurrentWord();

  const [display, setDisplay] = useState('hidden');
  const [bgColor, setBgColor] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    guesses.map((guess) => {
      if (guess.length === currentWord.length + 2 && currentWord.includes(guess.slice(0, -2))) {
        setDisplay('flex');
        setBgColor('bg-green-400');
        setMsg('גילית את המילה!');
      }
    });

    if (guesses.every((guess) => guess.length === currentWord.length)) {
      setDisplay('flex');
      setBgColor('bg-red-400');
      setMsg('נכשלת :(');
    }
  }, [guesses, currentWord]);

  return (
    <div
      className={`${display} absolute top-0 bottom-0 my-auto h-full w-full items-center justify-center`}
    >
      <div
        className={`${bgColor} flex h-1/3 w-1/3 items-center justify-center rounded-md text-4xl font-bold text-white shadow-2xl`}
      >
        {msg}
      </div>
    </div>
  );
};

export default GameOverMessage;
