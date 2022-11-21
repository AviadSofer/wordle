const getFinelLetter = (letter: string) => {
  if (letter === 'כ') return 'ך';
  if (letter === 'מ') return 'ם';
  if (letter === 'נ') return 'ן';
  if (letter === 'פ') return 'ף';
  if (letter === 'צ') return 'ץ';
  return letter;
};

export default getFinelLetter;
