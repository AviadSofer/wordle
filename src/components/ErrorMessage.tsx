import { useError } from '~/contexts/Error';
import { useEffect } from 'react';

const ErrorMessage: React.FC = () => {
  const { isError, setIsError, errorMsg } = useError();

  useEffect(() => {
    setTimeout(() => setIsError(false), 2500);
  }, [isError, setIsError]);

  const opacity = isError ? 'opacity-100' : 'opacity-0';

  return (
    <div className='relative'>
      <div
        className={`${opacity} absolute left-0 right-0 top-[-1rem] mx-auto flex h-12 w-36 items-center justify-center rounded-md bg-black text-sm font-medium text-white duration-500`}
      >
        {errorMsg}
      </div>
    </div>
  );
};

export default ErrorMessage;
