import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import popularWords from '~/static/popularWords';

const WordsByLenght: React.FC = () => {
  const [wordList, setWordList] = useState<String[]>([]);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      if (parseInt(id) >= 4 && parseInt(id) <= 11) {
        const wordsByLenght = popularWords.filter((word) => word.length === parseInt(id));
        setWordList(wordsByLenght);
      }
    }
  }, [id]);

  return (
    <div className='py-7'>
      <Helmet>
        <title>{`מילים עם ${id} אותיות`}</title>
      </Helmet>

      <h1 className='pb-4 text-center text-3xl font-bold text-font'>מילים עם {id} אותיות</h1>
      <h2 className='pb-7 text-center text-lg font-medium text-font'>
        רוצים לשחק עם המילים האלה?
        <Link to={`/${id}-letters`} className='font-semibold underline'>
          {' '}
          כנסו למשחק
        </Link>
      </h2>
      <div className='mx-auto flex w-1/2 flex-wrap justify-center gap-2'>
        {wordList.map((word, i) => (
          <div
            key={i}
            className='flex h-8 items-center justify-center rounded-md bg-gray-200 px-3 font-medium text-font'
          >
            {word}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordsByLenght;
