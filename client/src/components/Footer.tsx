import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className='py-7 text-center'>
      <span className='mt-1 text-base font-medium text-font'>
        <Link to={'/'}>
          <span className='cursor-pointer underline'>מילהלה משחק מילים</span>
        </Link>{' '}
        תפריט קישורים:
      </span>

      <div className='mt-1 text-base font-medium text-font'>
        <h1 className='font-semibold'> לפי אורך אותיות:</h1>
        <Link to={'/4-letters'} className='cursor-pointer underline'>
          משחק עם 4 אותיות
        </Link>{' '}
        |{' '}
        <Link to={'/5-letters'} className='cursor-pointer underline'>
          משחק עם 5 אותיות
        </Link>{' '}
        |{' '}
        <Link to={'/6-letters'} className='cursor-pointer underline'>
          משחק עם 6 אותיות
        </Link>{' '}
        |{' '}
        <Link to={'/7-letters'} className='cursor-pointer underline'>
          משחק עם 7 אותיות
        </Link>{' '}
        |{' '}
        <Link to={'/8-letters'} className='cursor-pointer underline'>
          משחק עם 8 אותיות
        </Link>{' '}
        |{' '}
        <Link to={'/9-letters'} className='cursor-pointer underline'>
          משחק עם 9 אותיות
        </Link>{' '}
        |{' '}
        <Link to={'/10-letters'} className='cursor-pointer underline'>
          משחק עם 10 אותיות
        </Link>{' '}
        |{' '}
        <Link to={'/11-letters'} className='cursor-pointer underline'>
          משחק עם 11 אותיות
        </Link>
      </div>

      <div className='mt-1 text-base font-medium text-font'>
        <h1 className='font-semibold'>רשימת מילים:</h1>
        <Link to={'/all-words/4'} className='cursor-pointer underline'>
          רשימת מילים באורך 4 אותיות
        </Link>{' '}
        |{' '}
        <Link to={'/all-words/5'} className='cursor-pointer underline'>
          רשימת מילים באורך 5 אותיות
        </Link>{' '}
        |{' '}
        <Link to={'/all-words/6'} className='cursor-pointer underline'>
          רשימת מילים באורך 6 אותיות
        </Link>{' '}
        |{' '}
        <Link to={'/all-words/7'} className='cursor-pointer underline'>
          רשימת מילים באורך 7 אותיות
        </Link>{' '}
        |{' '}
        <Link to={'/all-words/8'} className='cursor-pointer underline'>
          רשימת מילים באורך 8 אותיות
        </Link>{' '}
        |{' '}
        <Link to={'/all-words/9'} className='cursor-pointer underline'>
          רשימת מילים באורך 9 אותיות
        </Link>{' '}
        |{' '}
        <Link to={'/all-words/10'} className='cursor-pointer underline'>
          רשימת מילים באורך 10 אותיות
        </Link>{' '}
        |{' '}
        <Link to={'/all-words/11'} className='cursor-pointer underline'>
          רשימת מילים באורך 11 אותיות
        </Link>
      </div>

      <div className='mt-1 text-base font-medium text-font'>
        <h1 className='font-semibold'>יצירה:</h1>
        <Link to={'/create-new-word'} className='cursor-pointer underline'>
          יצירת משחק מילים
        </Link>{' '}
      </div>
    </footer>
  );
};

export default Footer;
