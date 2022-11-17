import { useCurrentWord } from '~/contexts/CurrentWord';
import { useTypedWord } from '~/contexts/TypedWord';
import { FiDelete } from 'react-icons/fi';
import { AiOutlineEnter } from 'react-icons/ai';

interface Props {
  children: React.ReactNode;
}

const Letter: React.FC<Props> = ({ children }) => {
  const { typedWord, setTypedWord } = useTypedWord();
  const { currentWord } = useCurrentWord();

  const getFinelLetter = (letter: string) => {
    if (letter === 'כ') return 'ך';
    if (letter === 'מ') return 'ם';
    if (letter === 'נ') return 'ן';
    if (letter === 'פ') return 'ף';
    if (letter === 'צ') return 'ץ';
    return letter;
  };

  const clickHandle = () => {
    if (children === 'D') {
      setTypedWord(typedWord.slice(0, -1));
    } else if (children === 'OK') {
      setTypedWord(typedWord.slice(0, -1));
    } else if (typedWord.length === currentWord.length - 1) {
      setTypedWord(`${typedWord}${getFinelLetter(`${children}`)}`);
    } else if (typedWord.length < currentWord.length) {
      setTypedWord(`${typedWord}${children}`);
    }
  };

  let key;
  if (children === 'D') {
    key = <FiDelete className='mx-2 mt-0.5 w-10' />;
  } else if (children === 'OK') {
    key = (
      <div className='flex flex-col items-center'>
        <span className='text-xs font-semibold text-font'>אישור</span>
        <AiOutlineEnter className='mx-2 mt-0.5 w-10' />
      </div>
    );
  } else {
    key = children;
  }

  return (
    <div
      className='flex h-11 min-w-[2rem] cursor-pointer items-center justify-center rounded-sm bg-gray-300 text-lg font-bold text-font'
      onClick={clickHandle}
      aria-hidden='true'
    >
      {key}
    </div>
  );
};

export default Letter;
