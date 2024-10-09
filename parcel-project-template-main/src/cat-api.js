import axios from "axios";

axios.defaults.headers.common["x-api-key"] =
  "live_doVHIPO7N1JmfzTR46JoMWhO0fPlm7IfHGN8gK6EGMIx7FSXkaxab4VL8fTVYEhS";

function fetchBreeds() {
  return new Promise((resolve, reject) => {
    axios
      .get("https://api.thecatapi.com/v1/breeds")
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

function fetchCatByBreed(breedId) {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export { fetchBreeds, fetchCatByBreed };