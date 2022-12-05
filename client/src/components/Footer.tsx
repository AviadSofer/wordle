import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className='py-7 px-5 text-center'>
      <span className='mt-1 text-sm font-medium text-font'>
        <Link to={'/'}>
          <span className='cursor-pointer text-blue-600 underline'>מילהלה משחק מילים</span>
        </Link>{' '}
        תפריט קישורים:
      </span>

      <div className='mt-1 text-sm font-medium text-font'>
        <h1 className='font-semibold'> לפי אורך אותיות:</h1>
        {new Array(8).fill('').map((_, i) => (
          <>
            <Link to={`/${i + 4}-letter`} className='cursor-pointer text-blue-600 underline'>
              משחק עם {i + 4} אותיות
            </Link>
            {i + 4 !== 11 ? <span> | </span> : <></>}
          </>
        ))}
      </div>

      <div className='mt-1 text-sm font-medium text-font'>
        <h1 className='font-semibold'>רשימת מילים:</h1>
        {new Array(8).fill('').map((_, i) => (
          <>
            <Link
              to={`/all-words/${i + 4}-letter`}
              className='cursor-pointer text-blue-600 underline'
            >
              רשימת מילים באורך {i + 4} אותיות
            </Link>
            {i + 4 !== 11 ? <span> | </span> : <></>}
          </>
        ))}
      </div>

      <div className='mt-1 text-sm font-medium text-font'>
        <h1 className='font-semibold'>יצירה:</h1>
        <Link to={'/create-new-word'} className='cursor-pointer text-blue-600 underline'>
          יצירת משחק מילים
        </Link>{' '}
      </div>

      <div className='flex justify-center gap-1.5'>
        <a
          href='contact.html'
          className='mt-1 cursor-pointer text-sm font-medium text-blue-600 underline'
        >
          צור קשר
        </a>

        <a
          href='negishot.html'
          className='mt-1 cursor-pointer text-sm font-medium text-blue-600 underline'
        >
          נגישות
        </a>
      </div>
    </footer>
  );
};

export default Footer;
