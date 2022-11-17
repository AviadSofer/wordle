import Guess from './Guess';

const GuessesGrid: React.FC = () => {
  return (
    <div className='grid gap-y-1'>
      {new Array(6).fill(0).map((_, i) => (
        <Guess key={i} />
      ))}
    </div>
  );
};

export default GuessesGrid;
