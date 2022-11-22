import { useEffect } from 'react';
import { useCurrentWord } from '~/contexts/CurrentWord';
import { useGuesses } from '~/contexts/Guesses';
import { useLettersNumber } from '~/contexts/LettersNumber';
import popularWords from '~/static/popularWords';
import { Link } from 'react-router-dom';

const ChooseLetterNumber: React.FC = () => {
  const { lettersNumber, setLettersNumber } = useLettersNumber();
  const { setCurrentWord } = useCurrentWord();
  const { setGuesses } = useGuesses();

  useEffect(() => {
    const wordByLenght = popularWords.filter((word) => {
      if (word.length === lettersNumber) return true;
    });
    const randomCurrentWord = wordByLenght[~~(Math.random() * wordByLenght.length)];
    setCurrentWord(randomCurrentWord);
    setGuesses(new Array(6).fill(''));
  }, [lettersNumber, setCurrentWord, setGuesses]);

  return (
    <div className='flex flex-col justify-between'>
      <h2 className='pr-1 text-lg font-semibold'>שחקו במילים מוכנות</h2>
      <div className='inline-grid grid-cols-8 grid-rows-1 gap-3'>
        {new Array(8).fill(0).map((_, i) => (
          <Link key={i} to={`/${i + 4}-letters`}>
            <div
              onClick={() => setLettersNumber(i + 4)}
              className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-md text-lg ${
                i + 4 === lettersNumber ? 'bg-green-500 text-white' : 'bg-blue-50 text-font'
              }`}
              aria-hidden='true'
            >
              {i + 4}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChooseLetterNumber;
