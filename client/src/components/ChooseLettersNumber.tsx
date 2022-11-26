import { Link } from 'react-router-dom';
import { useCurrentWord } from '~/contexts/CurrentWord';

const ChooseLettersNumber: React.FC = () => {
  const { currentWord } = useCurrentWord();

  return (
    <div className='flex flex-col justify-between'>
      <h2 className='pr-1 text-lg font-semibold'>שחקו במילים מוכנות</h2>
      <div className='inline-grid grid-cols-4 gap-3 md:grid-cols-8'>
        {new Array(8).fill(0).map((_, i) => (
          <Link key={i} to={`/${i + 4}-letters`}>
            <div
              className={`flex h-10 w-10 cursor-pointer items-center justify-center rounded-md text-lg ${
                i + 4 === currentWord.length ? 'bg-green-500 text-white' : 'bg-blue-50 text-font'
              }`}
              aria-hidden='true'
            >
              {i + 4}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChooseLettersNumber;
