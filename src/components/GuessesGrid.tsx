import { useGuesses } from '~/contexts/Guesses';
import Guess from './Guess';
import ErrorMessage from './ErrorMessage';
import { Route, Routes } from 'react-router-dom';

const GuessesGrid: React.FC = () => {
  const { guesses } = useGuesses();

  return (
    <div className='relative grid gap-y-1'>
      <ErrorMessage />
      <Routes>
        {new Array(8).fill(0).map((_, i) => (
          <Route
            key={i}
            path={`/${i + 4}-letters`}
            element={guesses.map((guess, guessKey) => (
              <Guess key={guessKey} guess={guess} letters={i + 4} />
            ))}
          />
        ))}
        <Route
          path={`/`}
          element={guesses.map((guess, guessKey) => (
            <Guess key={guessKey} guess={guess} letters={5} />
          ))}
        />
      </Routes>
    </div>
  );
};

export default GuessesGrid;
