import { useEffect } from 'react';
import { useCurrentWord } from '~/contexts/CurrentWord';
import { useError } from '~/contexts/Error';
import { useGuesses } from '~/contexts/Guesses';
import getFinelLetter from '~/helpers/getFinelLetter';
import hebrewLetters from '~/static/hebrewLetters';
import allWords from '~/static/allWords';
import Letter from './Letter';
import { useLocation } from 'react-router-dom';

const Keyboard: React.FC = () => {
  const { guesses, setGuesses } = useGuesses();
  const { currentWord } = useCurrentWord();
  const { setIsError, setErrorMsg } = useError();

  const location = useLocation();

  // Computer keyboard
  useEffect(() => {
    const checkKeyPress = (e: KeyboardEvent) => {
      const { key } = e;
      const targetElement = e.target as HTMLElement;

      const newGuesses = guesses.map((guess, i) => {
        if (
          i === guesses.findIndex((item) => item.length < currentWord.length + 2) &&
          !targetElement.tagName.toLowerCase().includes('input')
        ) {
          // Just Enter
          if (key === 'Enter' && guess.length < currentWord.length) {
            setIsError(true);
            setErrorMsg('אין מספיק אותיות!');

            // Enter in the end
          } else if (key === 'Enter' && guess.length === currentWord.length) {
            if (allWords.includes(guess) || location.pathname.includes('word')) {
              return `${guess}OK`;
            } else {
              setIsError(true);
              setErrorMsg('מילה לא תקנית!');
            }

            // Make finel letters
          } else if (hebrewLetters.includes(key) && guess.length === currentWord.length - 1) {
            return `${guess}${getFinelLetter(`${key}`)}`;

            // Rest of the cases
          } else if (
            hebrewLetters.includes(key) &&
            key !== ' ' &&
            guess.length < currentWord.length
          ) {
            return `${guess}${key}`;
          }
        }
        return guess;
      });

      setGuesses(newGuesses);
    };

    window.addEventListener('keypress', checkKeyPress);
    return () => {
      window.removeEventListener('keypress', checkKeyPress);
    };
  }, [currentWord.length, guesses, location.pathname, setErrorMsg, setGuesses, setIsError]);

  // Backspackey in computer keyboard
  useEffect(() => {
    const checkKeyDown = (e: KeyboardEvent) => {
      const { key } = e;

      const newGuesses = guesses.map((guess, i) => {
        if (
          i === guesses.findIndex((item) => item.length < currentWord.length + 2) &&
          key === 'Backspace'
        ) {
          return guess.slice(0, -1);
        }
        return guess;
      });

      setGuesses(newGuesses);
    };

    window.addEventListener('keydown', checkKeyDown);
    return () => {
      window.removeEventListener('keydown', checkKeyDown);
    };
  }, [currentWord.length, guesses, setGuesses]);

  const firstRow = ['OK', 'D', 'פ', 'ו', 'ט', 'א', 'ר', 'ק'];
  const secondRow = ['ל', 'ח', 'י', 'ע', 'כ', 'ג', 'ד', 'ש'];
  const thirdRow = ['ת', 'צ', 'מ', 'נ', 'ה', 'ב', 'ס', 'ז'];

  return (
    <div className='flex flex-col items-end gap-y-1'>
      <div className='flex gap-x-1'>
        {firstRow.map((letter, i) => (
          <Letter key={i}>{letter}</Letter>
        ))}
      </div>
      <div className='flex gap-x-1'>
        {secondRow.map((letter, i) => (
          <Letter key={i}>{letter}</Letter>
        ))}
      </div>
      <div className='flex gap-x-1'>
        {thirdRow.map((letter, i) => (
          <Letter key={i}>{letter}</Letter>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;