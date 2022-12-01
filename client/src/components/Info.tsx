import { useState } from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

interface Props {
  infoDisplay?: string;
}

const Info: React.FC<Props> = () => {
  const [display, setDisplay] = useState('hidden');

  return (
    <div>
      <BsInfoCircle
        onClick={() => setDisplay('flex')}
        size={25}
        className='cursor-pointer text-font'
      />

      <div className={`${display} fixed top-0 right-0 h-full w-full`}>
        <div className='relative mx-auto my-auto flex w-5/6 flex-col items-center gap-4 rounded-md bg-white py-5 shadow-2xl md:h-1/3 md:w-1/3'>
          <IoClose
            className='absolute right-4 top-[26px] cursor-pointer'
            size={25}
            onClick={() => setDisplay('hidden')}
          />
          <h1 className='text-2xl font-bold text-font'>איך משחקים?</h1>
          <ul className='w-5/6 list-disc font-medium text-font'>
            <li>בכל שורה הזינו מלה בת כמות האותיות בדיוק.</li>
            <li>אחרי כל ניסיון, האותיות ייצבעו בצבעים שמשקפים עד כמה הניחוש קרוב למילה.</li>
            <li>נחשו את המילה תוך שישה ניסיונות או פחות.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;
