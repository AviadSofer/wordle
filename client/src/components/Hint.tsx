import { Link, useParams } from 'react-router-dom';
import { decodeString } from '~/helpers/encode';
import { useState, useEffect } from 'react';

const Hint: React.FC = () => {
  const { id } = useParams();

  const [hint, setHint] = useState('');
  const [display, setDisplay] = useState('flex');

  useEffect(() => {
    const decodedUrl = decodeString(`${id}`);
    const hintFromUrl = decodedUrl.split(',')[0];

    if (hintFromUrl === '') {
      setDisplay('hidden');
    } else {
      setHint(hintFromUrl);
    }
  }, [id]);

  return (
    <div className={`mx-auto flex flex-col items-center justify-center bg-white`}>
      <h1 className='pb-1.5 text-xl font-bold text-font'>נחשו את המילה ששלחתי - מילהלה</h1>
      <h2 className={`${display} text-lg font-medium text-font`}>{`רמז: ${hint}`}</h2>
      <div className='flex gap-1 pt-2'>
        <Link to={'/'}>
          <button className='h-10 w-36 rounded-md bg-green-500 text-sm font-medium text-white hover:bg-green-700'>
            שחקו במילים אחרות
          </button>
        </Link>
        <Link to={'/create-new-word'}>
          <button className='h-10 w-36 rounded-md bg-gray-500 text-sm font-medium text-white hover:bg-gray-600'>
            צרו מילה בעצמכם
          </button>
        </Link>
      </div>
      <span
        className='mt-1 cursor-pointer text-base font-medium text-font underline'
        onClick={() => window.open('mailto:yogevper@gmail.com', '_blank')}
      >
        דיווח על מילה
      </span>
    </div>
  );
};

export default Hint;
