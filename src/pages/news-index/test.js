function getQuoteData() {
  const response = fetch(
    'https://newsapi.org/v2/top-headlines?q=trump&apiKey=a5f8f2060f434a73b8d84c61e1afbcb7'
  );
  response
    .then((newquote) => {
      return newquote.json();
    })
    .then((newquote) => {
      console.log(newquote);
    });
}
