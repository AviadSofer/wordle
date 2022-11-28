import { useGuesses } from '~/contexts/Guesses';
import Guess from './Guess';
import ErrorMessage from './ErrorMessage';
import { Route, Routes } from 'react-router-dom';
import Hint from './Hint';
import { useCurrentWord } from '~/contexts/CurrentWord';
import AdminPanel from './AdminPanel';

const GuessesGrid: React.FC = () => {
  const { guesses } = useGuesses();
  const { currentWord } = useCurrentWord();

  return (
    <div
      className={`grid py-10 md:py-0 ${
        currentWord.length > 6 ? 'gap-y-2.5' : 'gap-y-1.5'
      } md:gap-y-1.5`}
    >
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
          path={`/word/:id`}
          element={
            <>
              <Hint />
              {guesses.map((guess, guessKey) => (
                <Guess key={guessKey} guess={guess} />
              ))}
            </>
          }
        />

        <Route path={`/admin`} element={<AdminPanel />} />

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
