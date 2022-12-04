import { ChangeEvent, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { encodeString } from '~/helpers/encode';
import { IoClose } from 'react-icons/io5';
import { BsShareFill } from 'react-icons/bs';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import hebrewLetters from '~/static/hebrewLetters';
import fetchWordsList from '../api/fetchWordsList';
import { Helmet } from 'react-helmet-async';
import Footer from './Footer';

interface Word {
  word: string;
}

const CreateWordPage: React.FC = () => {
  const [wordsList, setWordList] = useState<Word[]>([]);

  const [showErr, setShowErr] = useState(false);
  const [errMsg, setErrMsg] = useState('בין 4 ל11 אותיות');

  const [hint, setHint] = useState('');
  const [word, setWord] = useState('');

  const [isCopy, setIsCopy] = useState(false);

  const location = useLocation();

  useEffect(() => {
    (async () => {
      const offensiveWords = await fetchWordsList('/api/get-offensive-words');
      setWordList(offensiveWords);
    })();
  }, []);

  useEffect(() => {
    // Handeling showErr
    if (word.length > 0 && word.length < 4) {
      setErrMsg('בין 4 ל11 אותיות');
      setShowErr(true);
    } else if ([...'ךםןףץ'].some((letter) => word.slice(0, word.length - 1).includes(letter))) {
      setErrMsg('אות סופית יכולה להיות רק באמצע מילה');
      setShowErr(true);
    } else if (wordsList.find((e) => e.word === word)) {
      setErrMsg('מילה פוגענית');
      setShowErr(true);
    } else {
      setShowErr(false);
    }
  }, [word]);

  useEffect(() => {
    setTimeout(() => setIsCopy(false), 1500);
  }, [isCopy]);

  const onWordChange = (e: ChangeEvent<HTMLInputElement>) => {
    let { value } = e.target;

    value = value.slice(0, 11);

    if (hebrewLetters.includes(`${[...value].pop()}`) || value === '') {
      setWord(value);
    } else {
      setErrMsg('אפשר לכתוב רק בעברית, ובלי רווחים');
      setShowErr(true);
    }
  };

  const copyLink = () => {
    if (!showErr && word !== '') {
      setIsCopy(true);
      navigator.clipboard.writeText(
        `${window.location.origin}/word/${encodeString(`${hint},${word}`)}`,
      );
    } else {
      setShowErr(true);
    }
  };

  const shareInWhatsapp = () => {
    if (!showErr) {
      const currentLocation = window.location.origin;
      const link = `https://api.whatsapp.com/send?phone=&text=${currentLocation}/word/${encodeString(
        `${hint},${word}`,
      )}`;
      window.open(link, '_blank');
    } else {
      setShowErr(true);
    }
  };

  const closeWindow = () => {
    if (!showErr) {
      setHint('');
      setWord('');
    } else {
      setShowErr(true);
    }
  };

  return (
    <>
      <div className={`w-ful flex h-full`}>
        <Helmet>
          <title>{'יצירת משחק מילים בעברית - מחולל משחק מילים - מילהלה'}</title>
          <meta
            name='description'
            content={
              'יצירת משחק מילים בעברית חינם, מחולל משחק מילים בסגנון וורדל בחינם אונליין, פשוט בחרו מספר אותיות ושלחו לחברים את משחק המילים שלכם.'
            }
          />
        </Helmet>

        <div className='relative mx-auto flex w-5/6 flex-col items-center rounded-md bg-white py-5 md:w-[45%]'>
          <h1 className='mt-10 text-xl font-semibold text-font underline'>
            יצירת משחק מילים בעברית - מילהלה
          </h1>

          <Link to={'/'}>
            <IoClose className='absolute right-1 top-6 cursor-pointer md:right-14' size={25} />
          </Link>

          <h1 className='pt-5 text-xl font-bold text-font'>יצירת משחק מילים</h1>

          <label htmlFor='hint' className='mt-2 text-xl font-medium text-font'>
            מילה
          </label>
          <input
            type='text'
            value={word}
            onChange={onWordChange}
            className='w-5/6 border-b-2 border-gray-500 bg-transparent text-lg focus:border-blue-600 focus:outline-none'
          />

          <label htmlFor='hint' className='mt-5 text-xl font-medium text-font'>
            רמז (לא חובה)
          </label>
          <input
            type='text'
            onChange={(e) => setHint(e.target.value)}
            className='w-5/6 border-b-2 border-gray-500 bg-transparent text-lg focus:border-blue-600 focus:outline-none'
          />

          <span
            className={`${showErr ? 'opacity-100' : 'opacity-0'} mb-3 font-medium text-red-700`}
          >
            {errMsg}
          </span>

          <div className='relative flex flex-col gap-1 text-sm font-medium text-white md:flex-row'>
            <button
              onClick={copyLink}
              className='flex h-10 w-36 items-center justify-center gap-2.5 rounded-md bg-gray-500 hover:bg-gray-700'
            >
              <span>העתק קישור</span>
              <BsShareFill />
            </button>

            <div
              onClick={copyLink}
              className={`${
                isCopy ? 'flex opacity-100' : 'flex opacity-0'
              } absolute h-10 w-36 items-center rounded-md bg-black px-4 text-xs font-semibold duration-1000 md:bottom-0 md:top-0 md:right-[-10rem] md:my-auto md:h-8 md:w-auto md:text-sm`}
            >
              הועתק ללוח העריכה
            </div>

            <button
              onClick={shareInWhatsapp}
              className='flex h-10 w-36 items-center justify-center gap-2.5 rounded-md bg-green-600 hover:bg-green-700'
            >
              <span>שיתוף בוואסאפ</span>
              <AiOutlineWhatsApp size={20} />
            </button>

            <Link to={!showErr ? `/word/${encodeString(`${hint},${word}`)}` : location.pathname}>
              <button
                onClick={closeWindow}
                className='h-10 w-36 rounded-md bg-blue-800 hover:bg-blue-900'
              >
                התחל משחק
              </button>
            </Link>
          </div>

          <h1 className='pt-8 pb-3 text-xl font-bold text-font'>שחקו במילים מוכנות</h1>

          <div className='flex md:gap-3'>
            {new Array(8).fill(0).map((_, i) => (
              <Link key={i} to={`/${i + 4}-letters`}>
                <div
                  className={`mx-1 h-10 w-10 cursor-pointer items-center justify-center rounded-lg text-lg md:mx-0 ${
                    i < 4 ? 'flex' : 'hidden md:flex'
                  } ${i + 4 === 5 ? 'bg-green-500 text-white' : 'bg-blue-50 text-font'}`}
                  aria-hidden='true'
                >
                  {i + 4}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateWordPage;
