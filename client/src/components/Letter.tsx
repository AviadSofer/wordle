import { useCurrentWord } from '~/contexts/CurrentWord';
import { useGuesses } from '~/contexts/Guesses';
import { FiDelete } from 'react-icons/fi';
import { AiOutlineEnter } from 'react-icons/ai';
import allWords from '~/static/allWords';
import { useError } from '~/contexts/Error';
import { useEffect, useState } from 'react';
import getFinelLetter from '~/helpers/getFinelLetter';

interface Props {
  children: React.ReactNode;
}

const Letter: React.FC<Props> = ({ children }) => {
  const { guesses, setGuesses } = useGuesses();
  const { currentWord } = useCurrentWord();
  const { setIsError, setErrorMsg } = useError();

  const [bgColor, setBgColor] = useState('bg-gray-300 text-font');

  useEffect(() => {
    // Define key color
    new Array(currentWord.length).fill('').map((_, i) => {
      guesses.map((guess) => {
        if (guess.length > currentWord.length && children !== 'OK') {
          // Or just letter ot finel letter
          if (guess[i] === children || guess[i] === getFinelLetter(`${children}`)) {
            const newBgColor =
              guess[i] === currentWord[i]
                ? 'bg-green-400 text-font'
                : currentWord.includes(guess[i])
                ? 'bg-yellow-400 text-font'
                : 'bg-gray-500 text-white';

            setBgColor(newBgColor);
          }
        }
      });
    });
  }, [children, currentWord, guesses]);

  useEffect(() => {
    // Reaset keys color if currentWord change
    setBgColor('bg-gray-300 text-font');
  }, [currentWord]);

  const clickHandle = () => {
    const newGuesses = guesses.map((guess, i) => {
      if (i === guesses.findIndex((item) => item.length < currentWord.length + 2)) {
        // Just OK button
        if (children === 'OK' && guess.length < currentWord.length) {
          setIsError(true);
          setErrorMsg('אין מספיק אותיות!');

          // OK button in the end
        } else if (children === 'OK' && guess.length === currentWord.length) {
          if (allWords.includes(guess)) {
            return `${guess}OK`;
          } else {
            setIsError(true);
            setErrorMsg('מילה לא תקנית!');
          }

          // Delete button
        } else if (children === 'D') {
          return guess.slice(0, -1);

          // Make finel letters
        } else if (guess.length === currentWord.length - 1) {
          return `${guess}${getFinelLetter(`${children}`)}`;

          // Rest of the cases
        } else if (guess.length < currentWord.length) {
          return `${guess}${children}`;
        }
      }

      return guess;
    });

    setGuesses(newGuesses);
  };

  let key;
  if (children === 'D') {
    key = <FiDelete className='mx-2 mt-0.5 w-10' />;
  } else if (children === 'OK') {
    key = (
      <div className='flex flex-col items-center'>
        <span className='text-xs font-semibold text-font'>אישור</span>
        <AiOutlineEnter className='mx-2 mt-0.5 w-10' />
      </div>
    );
  } else {
    key = children;
  }

  return (
    <div
      className={`${bgColor} flex h-11 min-w-[2rem] cursor-pointer items-center justify-center rounded-sm text-lg font-bold`}
      onClick={clickHandle}
      aria-hidden='true'
    >
      {key}
    </div>
  );
};

export default Letter;
