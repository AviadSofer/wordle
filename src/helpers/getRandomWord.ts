import popularWords from '~/static/popularWords';

const getRandomWord = (letters: number) => {
  const wordsByLenght = popularWords.filter((word) => {
    if (word.length === letters) return true;
  });

  return wordsByLenght[~~(Math.random() * wordsByLenght.length)];
};

export default getRandomWord;
