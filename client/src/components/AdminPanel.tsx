import { useState, useEffect } from 'react';
import addNewWord from '~/api/addNewWord';
import fetchWordsList from '~/api/fetchWordsList';
import { AiFillDelete } from 'react-icons/ai';
import deleteWord from '~/api/deleteWord';

interface Word {
  word: string;
}

const AdminPanel: React.FC = () => {
  const [showLists, setShowLists] = useState(false);

  const [offensiveWords, setOffensiveWords] = useState<Word[]>([]);
  const [newOffensiveWord, setNewOffensiveWord] = useState('');

  const [reportedWords, setReportedWords] = useState<Word[]>([]);

  const [err, setErr] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    document.title = 'ניהול מילים פוגעניות';

    (async () => {
      const offensiveWords = await fetchWordsList('/api/get-offensive-words');
      setOffensiveWords(offensiveWords);

      const reportedWords = await fetchWordsList('/api/get-reported-words');
      setReportedWords(reportedWords);
    })();
  }, []);

  const newWordHandle = async () => {
    const addNewWordStatus = await addNewWord('/api/get-offensive-words', newOffensiveWord);
    if (addNewWordStatus === 401) {
      setErr(true);
      setErrMsg('המילה קיימת כבר! או שמשהו השתבש');
    } else {
      setErr(false);
      setNewOffensiveWord('');
      const offensiveWords = await fetchWordsList('/api/get-offensive-words');
      setOffensiveWords(offensiveWords);
    }
  };

  const deleteoffensiveWord = async (word: string) => {
    const deleteStatus = await deleteWord('/api/get-offensive-words', word);
    if (deleteStatus === 401) {
      setErr(true);
      setErrMsg('משהו השתבש');
    } else {
      setErr(false);
      const offensiveWords = await fetchWordsList('/api/get-offensive-words');
      setOffensiveWords(offensiveWords);
    }
  };

  const deleteReportedWord = async (word: string) => {
    const deleteStatus = await deleteWord('/api/get-reported-words', word);
    if (deleteStatus === 401) {
      setErr(true);
      setErrMsg('משהו השתבש');
    } else {
      setErr(false);
      const reportedWords = await fetchWordsList('/api/get-reported-words');
      setReportedWords(reportedWords);
    }
  };

  return (
    <div className='flex h-screen w-full items-center justify-center bg-red-200'>
      <div className='flex min-h-[50%] flex-col items-center rounded-md bg-white px-32 py-4 text-center shadow-md'>
        <h1 className='py-3 text-lg font-bold text-font'>רשימת מילים פוגעניות</h1>

        {showLists ? (
          <div className='flex flex-col gap-10 md:flex-row'>
            <div className='flex flex-col items-start'>
              <h1 className='py-2 text-base font-medium text-font'>מילים פוגעניות שאושרו</h1>

              <div className='flex w-full flex-wrap justify-start gap-3 pb-2'>
                <input
                  value={newOffensiveWord}
                  onChange={(e) => {
                    let { value } = e.target;
                    value = value.slice(0, 11);
                    setNewOffensiveWord(value);
                  }}
                  type='text'
                  placeholder='מילה חדשה'
                  className='w-1/2 border-b-2 border-gray-500 bg-transparent text-base focus:border-blue-600 focus:outline-none'
                />
                <button
                  onClick={newWordHandle}
                  className='rounded-md bg-blue-800 px-2 py-1 text-base font-medium text-white hover:bg-blue-900'
                >
                  הוספה
                </button>
                <span className={`${err ? 'block' : 'hidden'} text-md font-normal text-red-600`}>
                  {errMsg}
                </span>
              </div>

              {offensiveWords.map((value, i) => (
                <div key={i} className='flex w-44 items-center justify-between py-1'>
                  <span className='text-base font-normal text-font'>{`${i + 1}. ${
                    value.word
                  }`}</span>
                  <AiFillDelete
                    onClick={() => deleteoffensiveWord(value.word)}
                    size={20}
                    className='relative top-[1px] cursor-pointer text-font'
                  />
                </div>
              ))}
            </div>

            <div className='flex flex-col'>
              <h1 className='py-2 text-base font-medium text-font'>מילים פוגעניות שדווחו</h1>

              {reportedWords.map((value, i) => (
                <div key={i} className='flex w-44 items-center justify-between py-1'>
                  <span className='text-base font-normal text-font'>{`${i + 1}. ${
                    value.word
                  }`}</span>
                  <AiFillDelete
                    onClick={() => deleteReportedWord(value.word)}
                    size={20}
                    className='relative top-[1px] cursor-pointer text-font'
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <input
            onChange={(e) =>
              e.target.value === 'oslo1994' ? setShowLists(true) : setShowLists(false)
            }
            type='password'
            placeholder='סיסמה'
            className='w-56 border-b-2 border-gray-500 bg-transparent text-lg focus:border-blue-600 focus:outline-none'
          />
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
