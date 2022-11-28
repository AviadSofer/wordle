import { useState, useEffect } from 'react';
import addNewWord from '~/api/addNewWord';
import getOffensiveWords from '~/api/getOffensiveWords';
import { AiFillDelete } from 'react-icons/ai';
import deleteWord from '~/api/deleteWord';

interface Word {
  word: string;
}

const AdminPanel: React.FC = () => {
  const [showList, setShowList] = useState(false);

  const [wordsList, setWordList] = useState<Word[]>([]);
  const [newWord, setNewWord] = useState('');

  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    document.title = 'ניהול מילים פוגעניות';

    (async () => {
      const offensiveWords = await getOffensiveWords();
      setWordList(offensiveWords);
    })();
  }, []);

  const newWordHandle = async () => {
    const addNewWordStatus = await addNewWord(newWord);
    if (addNewWordStatus === 401) {
      setErr(true);
      setErrMsg('המילה קיימת כבר! או שמשהו השתבש');
    } else {
      setErr(false);
      setNewWord('');
      const offensiveWords = await getOffensiveWords();
      setWordList(offensiveWords);
    }
  };

  const deleteWordHandle = async (word: string) => {
    const deleteStatus = await deleteWord(word);
    if (deleteStatus === 401) {
      setErr(true);
      setErrMsg('משהו השתבש');
    } else {
      setErr(false);
      const offensiveWords = await getOffensiveWords();
      setWordList(offensiveWords);
    }
  };

  return (
    <div className='fixed top-0 left-0 flex h-full w-full items-center justify-center bg-red-200'>
      <div className='flex min-h-[50%] w-5/6 flex-col items-center rounded-md bg-white text-center shadow-md md:w-1/3'>
        <h1 className='py-5 text-lg font-semibold text-font'>רשימת מילים פוגעניות</h1>

        {showList ? (
          <>
            <div className='flex w-full flex-wrap justify-center gap-3 pb-2'>
              <input
                value={newWord}
                onChange={(e) => setNewWord(e.target.value)}
                type='text'
                placeholder='מילה חדשה'
                className='w-1/2 border-b-2 border-gray-500 bg-transparent text-lg focus:border-blue-600 focus:outline-none'
              />
              <button
                onClick={newWordHandle}
                className='text-md rounded-md bg-blue-800 px-2 py-1 font-medium text-white hover:bg-blue-900'
              >
                הוספה
              </button>
              <span className={`${err ? 'block' : 'hidden'} text-md font-normal text-red-600`}>
                {errMsg}
              </span>
            </div>

            {wordsList.map((value, i) => (
              <div key={i} className='flex w-1/2 items-center justify-between py-1'>
                <span className='text-lg font-normal text-font'>{`${i + 1}. ${value.word}`}</span>
                <AiFillDelete
                  onClick={() => deleteWordHandle(value.word)}
                  size={20}
                  className='relative top-[1px] cursor-pointer text-font'
                />
              </div>
            ))}
          </>
        ) : (
          <input
            onChange={(e) =>
              e.target.value === 'oslo1994' ? setShowList(true) : setShowList(false)
            }
            type='password'
            placeholder='סיסמה'
            className='w-1/2 border-b-2 border-gray-500 bg-transparent text-lg focus:border-blue-600 focus:outline-none'
          />
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
