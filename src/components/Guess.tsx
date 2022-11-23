import { useCurrentWord } from '~/contexts/CurrentWord';
import { useEffect } from 'react';
import popularWords from '~/static/popularWords';
import { useGuesses } from '~/contexts/Guesses';

interface Props {
  guess: string;
  letters: number;
}

const Guess: React.FC<Props> = ({ letters, guess }) => {
  const { currentWord, setCurrentWord } = useCurrentWord();
  const { setGuesses } = useGuesses();

  useEffect(() => {
    const wordByLenght = popularWords.filter((word) => {
      if (word.length === letters) return true;
    });
    const randomCurrentWord = wordByLenght[~~(Math.random() * wordByLenght.length)];

    setCurrentWord(randomCurrentWord);
    setGuesses(new Array(6).fill(''));
  }, [letters, setCurrentWord, setGuesses]);

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${currentWord.length}, minmax(0, 1fr))` }}
      className='grid gap-x-1'
    >
      {new Array(currentWord.length).fill(0).map((_, i) => {
        const bgColor =
          guess.length !== currentWord.length + 2
            ? 'bg-white border-2'
            : guess[i] === currentWord[i]
            ? 'bg-green-400 border-0'
            : currentWord.includes(guess[i])
            ? 'bg-yellow-400 border-0'
            : 'bg-gray-500 text-white border-0';

        return (
          <div
            key={i}
            className={`flex h-12 w-12 items-center justify-center rounded-md border-gray-300 font-bold ${bgColor}`}
          >
            {guess[i]}
          </div>
        );
      })}
    </div>
  );
};

export default Guess;
