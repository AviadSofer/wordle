const getFinelLetter = (letter: string) => {
  if (letter === 'כ') return 'ך';
  if (letter === 'מ') return 'ם';
  if (letter === 'נ') return 'ן';
  if (letter === 'פ') return 'ף';
  if (letter === 'צ') return 'ץ';
  return letter;
};

const getNormalLetter = (letter: string) => {
  if (letter === 'ך') return 'כ';
  if (letter === 'ם') return 'מ';
  if (letter === 'ן') return 'נ';
  if (letter === 'ף') return 'פ';
  if (letter === 'ץ') return 'צ';
  return letter;
};

export { getFinelLetter, getNormalLetter };
