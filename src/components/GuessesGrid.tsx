import { useGuesses } from '~/contexts/Guesses';
import Guess from './Guess';
import ErrorMessage from './ErrorMessage';

const GuessesGrid: React.FC = () => {
  const { guesses } = useGuesses();

  return (
    <div className='relative grid gap-y-1'>
      <ErrorMessage />
      {guesses.map((guess, i) => (
        <Guess key={i} guess={guess} />
      ))}
    </div>
  );
};

export default GuessesGrid;
