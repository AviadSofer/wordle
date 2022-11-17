import Letter from './Letter';

const Keyboard: React.FC = () => {
  const firstRow = ['D', 'פ', 'ו', 'ט', 'א', 'ר', 'ק'];
  const secondRow = ['ל', 'ח', 'י', 'ע', 'כ', 'ג', 'ד', 'ש'];
  const thirdRow = ['OK', 'ת', 'צ', 'מ', 'נ', 'ה', 'ב', 'ס', 'ז'];

  return (
    <div className='flex flex-col gap-y-1'>
      <div className='flex gap-x-1'>
        {firstRow.map((letter, i) => (
          <Letter key={i}>{letter}</Letter>
        ))}
      </div>
      <div className='flex gap-x-1 pr-12'>
        {secondRow.map((letter, i) => (
          <Letter key={i}>{letter}</Letter>
        ))}
      </div>
      <div className='flex gap-x-1'>
        {thirdRow.map((letter, i) => (
          <Letter key={i}>{letter}</Letter>
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
