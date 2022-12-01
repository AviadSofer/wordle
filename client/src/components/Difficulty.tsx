import { useCurrentLevel } from '~/contexts/currentLevel';

const Difficulty: React.FC = () => {
  const { currentLevel, setCurrentLevel } = useCurrentLevel();

  const levels = ['קל', 'קשה'];

  const clickHandle = (level: string) => {
    setCurrentLevel(level === 'קל' ? 'easy' : 'hard');
  };

  return (
    <div>
      <h2 className='pr-1 pb-1 text-sm font-semibold'>בחירת רמת קושי</h2>
      <div className='flex gap-x-1'>
        {levels.map((level, i) => (
          <div
            onClick={() => clickHandle(level)}
            key={i}
            className={`text-md flex h-10 w-16 cursor-pointer items-center justify-center rounded-lg ${
              (currentLevel === 'easy' && level === 'קל') ||
              (currentLevel === 'hard' && level === 'קשה')
                ? 'bg-green-500 text-white'
                : 'bg-blue-50 text-font'
            }`}
            title={
              level === 'קל'
                ? 'רמה קלה - ברמה קלה לא צריך להכניס מילים אמיתיות'
                : 'רמה קשה - ברמה קשה אפשר להכניס רק מילים אמיתיות ממאגר המילים שלנו'
            }
          >
            {level}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Difficulty;
