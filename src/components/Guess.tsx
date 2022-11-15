const Guess: React.FC = () => {
  const foo = 'fff';

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${foo.length}, minmax(0, 1fr))` }}
      className='grid gap-2'
    >
      {new Array(foo.length).fill(0).map((_, i) => (
        <div
          key={i}
          className='flex h-14 w-14 items-center justify-center rounded-md border border-gray-400 font-bold'
        >
          {foo[i]}
        </div>
      ))}
    </div>
  );
};

export default Guess;
