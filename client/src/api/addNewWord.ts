const addNewWord = async (word: string) =>
  fetch('/api/get-offensive-words', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      word,
    }),
  }).then((res) => res.status);

export default addNewWord;
