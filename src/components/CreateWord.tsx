import { ChangeEvent, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { encodeString } from '~/helpers/encode';
import { IoClose } from 'react-icons/io5';
import hebrewLetters from '~/static/hebrewLetters';

const CreateWord: React.FC = () => {
  const [display, setDisplay] = useState('hidden');
  const [showErr, setShowErr] = useState(false);
  const [hint, setHint] = useState('');
  const [word, setWord] = useState('');

  const location = useLocation();

  useEffect(() => {
    // Handeling showErr
    if (word.length > 0 && word.length < 4) {
      setShowErr(true);
    } else {
      setShowErr(false);
    }
  }, [word]);

  const onWordChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;
    value = value.slice(0, 11);
    if (hebrewLetters.includes(`${[...value].pop()}`) || value === '') {
      setWord(value);
    }
  };

  const onClickHandle = () => {
    if (word.length >= 4) {
      setDisplay('hidden');
      setHint('');
      setWord('');
    }
  };

  return (
    <div className='flex flex-col justify-between'>
      <h2 className='pr-1 text-lg font-semibold'>שלחו מילה לחברים</h2>
      <button
        onClick={() => setDisplay('flex')}
        className='rounded-md bg-blue-800 px-5 py-[6px] text-lg font-medium text-white hover:bg-blue-900'
      >
        צרו מילה
      </button>

      <div className={`${display} fixed top-0 right-0 h-full w-full`}>
        <div className='relative mx-auto my-auto flex h-1/2 w-1/3 flex-col items-center rounded-md bg-white py-5 shadow-2xl'>
          <IoClose
            className='absolute right-9 top-6 cursor-pointer'
            size={25}
            onClick={() => setDisplay('hidden')}
          />
          <h1 className='text-2xl font-bold text-font'>מילה חדשה</h1>

          <label htmlFor='hint' className='mt-7 text-xl font-medium text-font'>
            רמז (לא חובה)
          </label>
          <input
            type='text'
            onChange={(e) => setHint(e.target.value)}
            className='w-5/6 border-b-2 border-gray-500 bg-transparent text-lg focus:border-blue-600 focus:outline-none'
          />

          <label htmlFor='hint' className='mt-5 text-xl font-medium text-font'>
            מילה
          </label>
          <input
            type='text'
            value={word}
            onChange={onWordChange}
            className='w-5/6 border-b-2 border-gray-500 bg-transparent text-lg focus:border-blue-600 focus:outline-none'
          />

          <span
            className={`${showErr ? 'opacity-100' : 'opacity-0'} mb-3 font-medium text-red-700`}
          >
            בין 4 ל11 אותיות
          </span>

          <Link
            to={word.length >= 4 ? `/word/${encodeString(`${hint},${word}`)}` : location.pathname}
          >
            <button
              onClick={onClickHandle}
              className='text-md rounded-md bg-blue-800 px-7 py-3 font-medium text-white hover:bg-blue-900'
            >
              יצירת קישור
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateWord;
