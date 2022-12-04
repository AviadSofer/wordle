const addNewWord = async (url: string, word: string) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      word,
    }),
  }).then((res) => res.status);

export default addNewWord;
