import { useGuesses } from '~/contexts/Guesses';
import Guess from './Guess';

const GuessesGrid: React.FC = () => {
  const { guesses } = useGuesses();

  return (
    <div className='grid gap-y-1'>
      {guesses.map((guess, i) => (
        <Guess key={i} guess={guess} />
      ))}
    </div>
  );
};

export default GuessesGrid;
