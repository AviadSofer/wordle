import { useState, useEffect } from 'react';
import { decodeString } from '~/helpers/encode';
import addNewWord from '~/api/addNewWord';
import { useParams } from 'react-router-dom';

const ReportWord: React.FC = () => {
  const { id } = useParams();

  const [word, setWord] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [resultMsg, setResultMsg] = useState('');

  useEffect(() => {
    if (id) {
      const decodedUrl = decodeString(id);
      const wordFromUrl = decodedUrl.split(',')[1];

      setWord(wordFromUrl);
    }
  }, [id]);

  const onClickHandle = async () => {
    const addNewWordStatus = await addNewWord('/api/get-reported-words', word);
    setShowResult(true);
    if (addNewWordStatus === 401) {
      setResultMsg('דווח כבר');
    } else {
      setResultMsg('דווח בהצלחה');
    }
  };

  return (
    <div className='relative'>
      <span
        className='cursor-pointer text-base font-medium text-font underline'
        onClick={onClickHandle}
      >
        דיווח על מילה
      </span>

      <div
        className={`${
          showResult ? 'block' : 'hidden'
        } absolute top-0 w-full rounded-sm bg-black py-1 px-1 text-center text-sm text-white`}
      >
        {resultMsg}
      </div>
    </div>
  );
};

export default ReportWord;
