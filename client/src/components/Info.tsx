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
        <div className='relative mx-auto my-auto flex w-5/6 flex-col items-center gap-4 rounded-md bg-white py-5 shadow-2xl md:w-1/3'>
          <IoClose
            className='absolute right-4 top-[26px] cursor-pointer'
            size={25}
            onClick={() => setDisplay('hidden')}
          />
          <h1 className='text-2xl font-bold text-font'>איך משחקים?</h1>
          <p className='w-5/6 list-disc text-center text-sm font-medium text-font'>
            מילהלה הוא משחק מילים בו עליכם לנחש את המילה המסתתרת. <br />
            את המילה המסתתרת עליכם לנחש באמצעות מילים או אותיות אחרות. <br />
            הכניסו אותיות או מילים קיימות לריבועים. <br />
            תוכלו לעשות זאת על ידי הקלדה במקלדת למטה או במקלדת המחשב. <br />
            הקליקו אנטר או אישור. <br />
            לאחר מכן האותיות יסומנו בצבעים שירמזו לכם על המילה המסתתרת. <br />
            אם אות נצבעה בשחור- האות אינה קיימת במילה המסתתרת. <br />
            אם אות נצבעה בירוק - האות קיימת במילה המסתתרת באותו המיקום. <br />
            אם אות נצבעה בצהוב- האות קיימת במילה המסתתרת אך במיקום אחר. <br />
            עליכם לנחש את המילה המסתתרת ב6 ניחושים בלבד! <br />
            ניתן לשחק ב2 רמות קושי: <br />
            רמה קלה - בריבועים תוכלו להכניס איזה אותיות שתרצו מבלי להרכיב מילים קיימות. <br />
            רמה קשה - בריבועים עליכם להכניס מילים קיימות בלבד, יותר קשה שכן עליכם לחשוב על מילים כדי
            להתקדם, קשה במיוחד עם כמות אותיות גדולה. <br />
            בחרו את אורך האותיות איתן תרצו לשחק מ4 עד 11 אותיות. <br />
            כמו כן תוכלו ליצור משחק מילים לחברים ולשלוח להם לשחק. <br />
            תיהנו!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
