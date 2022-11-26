import { useParams } from 'react-router-dom';
import { decodeString } from '~/helpers/encode';
import { useState, useEffect } from 'react';

const Hint: React.FC = () => {
  const { id } = useParams();
  const [hint, setHint] = useState('');
  const [display, setDisplay] = useState('flex');

  useEffect(() => {
    const decodedUrl = decodeString(`${id}`);
    const hintFromUrl = decodedUrl.split(',')[0];

    if (hintFromUrl === '') {
      setDisplay('hidden');
    } else {
      setHint(hintFromUrl);
    }
  }, [id]);

  return (
    <div
      className={`fixed top-6 right-0 left-0 mx-auto flex h-20 w-full flex-col items-center justify-center bg-white md:w-1/2`}
    >
      <h1 className='pb-2 text-2xl font-bold text-font'>מילה מותאמת אישית</h1>
      <h2 className={`${display} text-xl font-medium text-font`}>{`רמז: ${hint}`}</h2>
    </div>
  );
};

export default Hint;
