import ChooseWord from './ChooseWord';
import CreateWord from './CreateWord';

const Header: React.FC = () => {
  return (
    <div className='flex h-20 gap-10'>
      <ChooseWord />
      <CreateWord />
    </div>
  );
};

export default Header;
