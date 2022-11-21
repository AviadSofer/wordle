import { useCurrentWord } from '~/contexts/CurrentWord';
import { useGuesses } from '~/contexts/Guesses';
import { useLettersNumber } from '~/contexts/LettersNumber';
import words from '~/static/words';

const ChooseLetterNumber: React.FC = () => {
  const { lettersNumber, setLettersNumber } = useLettersNumber();
  const { setCurrentWord } = useCurrentWord();
  const { setGuesses } = useGuesses();

  return (
    <div className='flex flex-col justify-between'>
      <h2 className='pr-1 text-lg font-semibold'>שחקו במילים מוכנות</h2>
      <div className='inline-grid grid-cols-8 grid-rows-1 gap-3'>
        {new Array(8).fill(0).map((_, i) => (
          <div
            key={i}
            className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-md text-lg ${
              i + 4 === lettersNumber ? 'bg-green-500 text-white' : 'bg-blue-50 text-font'
            }`}
            onClick={() => {
              setLettersNumber(i + 4);

              const wordByLenght = words.filter((word) => {
                if (word.length === i + 4) return true;
              });

              const randomCurrentWord = wordByLenght[~~(Math.random() * wordByLenght.length)];

              setCurrentWord(randomCurrentWord);
              setGuesses(new Array(6).fill(''));
            }}
            aria-hidden='true'
          >
            {i + 4}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseLetterNumber;
