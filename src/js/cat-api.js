import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_RRXNQX1bxVVwDonPuQPbz9hv29BTmlhT7XOh4HufSqZwJa1yowRxKFBVR88hQlgI';

// при успешном запросе нужно наполнить div select > breed-select опциями
// value = id породы, а в интерфейсе пользователя отображалось название породы

// делаем именованый экспорт функции, которая делает HTTP-запрос GET на ресурс https://api.thecatapi.com/v1/breeds
// возвращаем промис с массивом пород
export function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching breeds:', error);
      throw new Error('Failed to fetch breeds');
    });
}
