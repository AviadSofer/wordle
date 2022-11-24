import { useCurrentWord } from '~/contexts/CurrentWord';
import { useEffect } from 'react';
import { useGuesses } from '~/contexts/Guesses';
import getRandomWord from '~/helpers/getRandomWord';
import { useParams } from 'react-router-dom';
import { decodeString } from '~/helpers/encode';

interface Props {
  guess: string;
  letters?: number;
}

const Guess: React.FC<Props> = ({ letters, guess }) => {
  const { currentWord, setCurrentWord } = useCurrentWord();
  const { setGuesses } = useGuesses();

  const { id } = useParams();

  useEffect(() => {
    if (letters) {
      setCurrentWord(getRandomWord(letters));
      setGuesses(new Array(6).fill(''));
    }
  }, [letters, setCurrentWord, setGuesses]);

  useEffect(() => {
    if (id) {
      const decodedUrl = decodeString(id);
      const newCurrentWord = decodedUrl.split(',')[1];
      setCurrentWord(newCurrentWord);
    }
  }, [id, setCurrentWord]);

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
