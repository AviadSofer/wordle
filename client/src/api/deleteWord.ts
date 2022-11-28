const deleteWord = async (word: string) =>
  fetch('/api/get-offensive-words', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ word }),
  }).then((res) => res.status);

export default deleteWord;
