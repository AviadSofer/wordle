import { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Route, Routes } from 'react-router-dom';
import { useCurrentWord } from '~/contexts/CurrentWord';
import ChooseLettersNumber from './ChooseLettersNumber';
import CreateWordButton from './CreateWordButton';
import Difficulty from './Difficulty';
import Hint from './Hint';
import Info from './Info';

const Header: React.FC = () => {
  const [navWindow, setNavWindow] = useState(false);
  const [title, setTitle] = useState('מילהלה - משחק מילים בעברית אונליין');

  const { currentWord } = useCurrentWord();

  useEffect(() => {
    setTitle(document.title);
  }, [document.title]);

  useEffect(() => {
    setNavWindow(false);
  }, [currentWord]);

  return (
    <Routes>
      <Route
        path='/*'
        element={
          <>
            <div className='flex w-full justify-center'>
              <h1 className='text-xl font-semibold text-font underline'>{title}</h1>
            </div>

            <div
              className={`${
                navWindow ? 'pt-7' : 'pt-3 md:pt-0'
              } flex w-full items-center justify-between px-5 md:w-auto md:gap-x-10`}
            >
              <div className='cursor-pointer font-bold text-font hover:text-blue-700 md:hidden'>
                {navWindow ? (
                  <AiOutlineClose size={25} onClick={() => setNavWindow(false)} />
                ) : (
                  <AiOutlineMenu size={25} onClick={() => setNavWindow(true)} />
                )}
              </div>
              <div className='hidden md:block'>
                <Difficulty />
              </div>
              <ChooseLettersNumber />
              <CreateWordButton />
            </div>

            <div
              style={{ display: navWindow ? 'flex' : 'none' }}
              className='flex-col items-center gap-5 pt-5'
            >
              <Difficulty />
              <Info />
            </div>
          </>
        }
      />

      <Route path='/word/:id' element={<Hint />} />
    </Routes>
  );
};

export default Header;
