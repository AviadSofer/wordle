import { useCurrentWord } from '~/contexts/CurrentWord';
import { useTypedWord } from '~/contexts/TypedWord';

const Guess: React.FC = () => {
  const { currentWord } = useCurrentWord();
  const { typedWord } = useTypedWord();

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${currentWord.length}, minmax(0, 1fr))` }}
      className='grid gap-x-1'
    >
      {new Array(currentWord.length).fill(0).map((_, i) => (
        <div
          key={i}
          className='flex h-12 w-12 items-center justify-center rounded-md border-2 border-gray-300 font-bold'
        >
          {typedWord[i]}
        </div>
      ))}
    </div>
  );
};

export default Guess;
