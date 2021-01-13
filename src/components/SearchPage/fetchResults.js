import axios from 'axios';

export default async function fetchResults(term) {

  const response = await axios.get('https://en.wikipedia.org/w/api.php', {
    params: {
      action: 'query',
      list: 'search',
      origin: '*',
      format: 'json',
      srsearch: term,
    },
  }).then(res => {return res.data.query.search});
  console.log(response)
  return response
}