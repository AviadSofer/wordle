import { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useCurrentWord } from '~/contexts/CurrentWord';
import ChooseLettersNumber from './ChooseLettersNumber';
import CreateWord from './CreateWord';

const Header: React.FC = () => {
  const [navWindow, setNavWindow] = useState(false);

  const { currentWord } = useCurrentWord();

  useEffect(() => {
    setNavWindow(false);
  }, [currentWord]);

  return (
    <>
      <div className='cursor-pointer font-bold text-font hover:text-blue-700 md:hidden'>
        {navWindow ? (
          <AiOutlineClose size={25} onClick={() => setNavWindow(false)} />
        ) : (
          <AiOutlineMenu size={25} onClick={() => setNavWindow(true)} />
        )}
      </div>

      <div className='hidden md:flex md:h-20 md:gap-x-10'>
        <ChooseLettersNumber />
        <CreateWord />
      </div>

      <div
        style={{ display: navWindow ? 'flex' : 'none' }}
        className='flex-col items-center gap-10 pt-10'
      >
        <ChooseLettersNumber />
        <CreateWord />
      </div>
    </>
  );
};

export default Header;
