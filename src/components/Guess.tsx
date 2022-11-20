import { useCurrentWord } from '~/contexts/CurrentWord';
import { useState, useEffect } from 'react';

interface Props {
  guess: string;
}

const Guess: React.FC<Props> = ({ guess }) => {
  const { currentWord } = useCurrentWord();
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    if (guess.length === currentWord.length + 2) {
      setIsConfirmed(true);
    } else {
      setIsConfirmed(false);
    }
  }, [currentWord, guess]);

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${currentWord.length}, minmax(0, 1fr))` }}
      className='grid gap-x-1'
    >
      {new Array(currentWord.length).fill(0).map((_, i) => {
        const bgColor = !isConfirmed
          ? 'bg-white'
          : guess[i] === currentWord[i]
          ? 'bg-green-400 border-0'
          : currentWord.includes(guess[i])
          ? 'bg-yellow-400 border-0'
          : 'bg-gray-500 text-white border-0';

        return (
          <div
            key={i}
            className={`flex h-12 w-12 items-center justify-center rounded-md border-2 border-gray-300 font-bold ${bgColor}`}
          >
            {guess[i]}
          </div>
        );
      })}
    </div>
  );
};

export default Guess;
