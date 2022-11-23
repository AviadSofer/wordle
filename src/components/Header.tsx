import ChooseLettersNumber from './ChooseLettersNumber';
import CreateWord from './CreateWord';

const Header: React.FC = () => {
  return (
    <div className='flex h-20 gap-x-10'>
      <ChooseLettersNumber />
      <CreateWord />
    </div>
  );
};

export default Header;
