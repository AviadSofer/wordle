import { useGuesses } from '~/contexts/Guesses';
import Guess from './Guess';
import ErrorMessage from './ErrorMessage';
import { Route, Routes } from 'react-router-dom';
import { useCurrentWord } from '~/contexts/CurrentWord';

const GuessesGrid: React.FC = () => {
  const { guesses } = useGuesses();
  const { currentWord } = useCurrentWord();

  return (
    <div
      className={`grid md:py-0 ${currentWord.length > 6 ? 'gap-y-2.5' : 'gap-y-1.5'} md:gap-y-1.5`}
    >
      <ErrorMessage />
      <Routes>
        {new Array(8).fill(0).map((_, i) => (
          <Route
            key={i}
            path={`/${i + 4}-letters`}
            element={guesses.map((guess, guessKey) => (
              <Guess
                key={guessKey}
                title={`משחק מילים עם ${i + 4} אותיות בעברית - מילהלה `}
                description={`משחק מילים עם ${
                  i + 4
                } אותיות ו6 ניחושים בעברית חינם, משחק מילים בעברית עם 4 אותיות, משחק מילים יומי עם 4 אותיות, משחק מילים באורך 4 אותיות בסגנון וורדל אונליין ללא הגבלה, משחק מילים עם 4 אותיות אינסופי, כנסו לנחש מה המילה.`}
                guess={guess}
                letters={i + 4}
              />
            ))}
          />
        ))}

        <Route
          path='/word/:id'
          element={
            <>
              {guesses.map((guess, guessKey) => (
                <Guess
                  key={guessKey}
                  title={'מה המילה ששלחתי לך? משחק מילים  - מילהלה'}
                  description={
                    'הכנתי משחק מילים במיוחד בשבילך, נראה אותך! מה המילה ששלחתי לך? יאלה לנחש, אתר מילהלה יצירת משחקי מילים בחינם. '
                  }
                  guess={guess}
                />
              ))}
            </>
          }
        />

        <Route
          path={'/*'}
          element={guesses.map((guess, guessKey) => (
            <Guess
              key={guessKey}
              title={'מילהלה - משחק מילים בעברית אונליין'}
              description={
                'משחק מילים בעברית חינם, משחק מילים ב6 ניחושים בסגנון של המשחק וורדל בעברית,  משחק מילים יומי חינם, משחק מילים חדש ללא הגבלה! משחק מילים אינסופי, תוכלו לשחק כמה משחקי מילים שתרצו ביום.'
              }
              guess={guess}
              letters={5}
            />
          ))}
        />
      </Routes>
    </div>
  );
};

export default GuessesGrid;
