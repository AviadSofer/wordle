import { Link } from 'react-router-dom';
import { useCurrentWord } from '~/contexts/CurrentWord';

const ChooseLettersNumber: React.FC = () => {
  const { currentWord } = useCurrentWord();

  return (
    <div className='flex md:flex-col md:justify-between md:gap-1'>
      <h2 className='hidden pr-1 text-sm font-semibold md:block'>בחרו מספר אותיות</h2>
      <div className='flex md:gap-3'>
        {new Array(8).fill(0).map((_, i) => (
          <Link key={i} to={`/${i + 4}-letters`}>
            <div
              className={`mx-1 h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-lg md:mx-0 ${
                i < 4 ? 'flex' : 'hidden md:flex'
              } ${
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
