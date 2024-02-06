import { fetchBreeds } from './cat-api';

// функция для наполнения пустого блока (селекта) породой
function onBreedsSelect(breeds) {
  const selectElement = document.querySelector('.breed-select');
  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.textContent = breed.name;
    selectElement.appendChild(option);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  fetchBreeds()
    .then(breeds => {
      onBreedsSelect(breeds);
    })
    .catch(error => {
      console.error('Failed to fetch breeds:', error);
      const errorElement = document.querySelector('.error');
      errorElement.computedStyleMap.display = 'block';
    });
});
