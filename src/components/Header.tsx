import ChooseLetterNumber from './ChooseLetterNumber';
import CreateWord from './CreateWord';

const Header: React.FC = () => {
  return (
    <div className='flex h-20 gap-x-10'>
      <ChooseLetterNumber />
      <CreateWord />
    </div>
  );
};

export default Header;
