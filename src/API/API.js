import axios from 'axios';

const KEY = '84029c9837f956e6efcec3397d1d9066';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function getTrandingDay() {
  const res = await axios.get(`trending/all/day?api_key=${KEY}`);
  return res.data.results;
}

export async function getMovieById(id) {
  const res = await axios.get(`movie/${id}?api_key=${KEY}&language=en-US`);
  return res.data;
}

export async function getCastById(id) {
  const res = await axios.get(
    `movie/${id}/credits?api_key=${KEY}&language=en-US`
  );
  return res.data.cast;
}
export async function getReviewsById(id) {
  const res = await axios.get(
    `movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return res.data.results;
}
export async function getMoviesByName(value) {
  const res = await axios.get(
    `search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${value}`
  );
  return res.data.results;
}

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
