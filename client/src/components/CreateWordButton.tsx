import { Link } from 'react-router-dom';
import Info from './Info';

const CreateWordButton: React.FC = () => {
  return (
    <div className='relative flex flex-col justify-between gap-1'>
      <div className='absolute bottom-20 left-0 hidden md:block'>
        <Info />
      </div>

      <h2 className='hidden pr-1 text-sm font-semibold md:block'>שלחו מילה לחברים</h2>

      <Link to={'/create-new-word'}>
        <button className='rounded-lg bg-blue-800 px-5 py-2 text-base font-medium text-white hover:bg-blue-900 md:py-[6px] md:text-lg'>
          {window.matchMedia('(min-width: 769px)').matches ? 'צרו מילה' : 'צרו'}
        </button>
      </Link>
    </div>
  );
};

export default CreateWordButton;
