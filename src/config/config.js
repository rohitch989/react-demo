import axios from 'axios';



export const sendRequest = async ({ method, url, body = null }) => {

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
  };

  const URL = process.env.REACT_APP_API_URL + url
  if (body) {
    const params = JSON.stringify([body])
    return await axios[method](URL, params, { headers, mode: 'no-cors' }).then(response => {
      return response;
    }).catch(e => e.message);
  }

  return await axios[method](URL, { headers, mode: 'no-cors' }).then(response => {
    return response;
  }).catch(e => e.message);
}