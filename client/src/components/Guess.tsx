import { useCurrentWord } from '~/contexts/CurrentWord';
import { useState, useEffect } from 'react';
import { useGuesses } from '~/contexts/Guesses';
import getRandomWord from '~/helpers/getRandomWord';
import { useParams } from 'react-router-dom';
import { decodeString } from '~/helpers/encode';
import { Helmet } from 'react-helmet-async';
import { getFinelLetter, getNormalLetter } from '~/helpers/getLetter';

interface Props {
  title: string;
  description: string;
  guess: string;
  letters?: number;
}

const Guess: React.FC<Props> = ({ title, description, letters, guess }) => {
  const [boxSize, setBoxSize] = useState('');

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

  useEffect(() => {
    const length = currentWord.length;

    setBoxSize(
      length < 6
        ? 'h-14 w-14'
        : length < 8
        ? 'h-12 w-12'
        : length < 9
        ? 'h-12 w-10'
        : length < 10
        ? 'h-12 w-9'
        : 'h-12 w-8',
    );
  }, [currentWord]);

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${currentWord.length}, minmax(0, 1fr))` }}
      className='grid gap-x-1.5'
    >
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Helmet>

      {new Array(currentWord.length).fill(0).map((_, i) => {
        const bgColor =
          guess.length !== currentWord.length + 2
            ? 'bg-white border-2'
            : guess[i] === currentWord[i]
            ? 'bg-green-400 border-0'
            : currentWord.includes(guess[i]) ||
              currentWord.includes(getFinelLetter(guess[i])) ||
              currentWord.includes(getNormalLetter(guess[i]))
            ? 'bg-yellow-400 border-0'
            : 'bg-gray-500 text-white border-0';

        return (
          <div
            key={i}
            className={`flex ${boxSize} ${bgColor} items-center justify-center rounded-md border-gray-300 font-bold md:h-12 md:w-12`}
          >
            {guess[i]}
          </div>
        );
      })}
    </div>
  );
};

export default Guess;
