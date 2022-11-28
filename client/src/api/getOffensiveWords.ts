const getOffensiveWords = async () =>
  fetch('/api/get-offensive-words', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());

export default getOffensiveWords;
