const deleteWord = async (url: string, word: string) =>
  fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ word }),
  }).then((res) => res.status);

export default deleteWord;
