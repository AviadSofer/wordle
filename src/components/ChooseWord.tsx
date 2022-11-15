const ChooseWord: React.FC = () => {
  return (
    <div className='flex flex-col justify-between'>
      <h2 className='pr-1 text-lg font-semibold'>שחקו במילים מוכנות</h2>
      <div className='inline-grid grid-cols-8 grid-rows-1 gap-3'>
        {new Array(8).fill(0).map((_, i) => (
          <div
            key={i}
            className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-md text-lg ${
              i + 1 === 7 ? 'bg-green-500 text-white' : 'bg-blue-50 text-font'
            }`}
            aria-hidden='true'
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseWord;
