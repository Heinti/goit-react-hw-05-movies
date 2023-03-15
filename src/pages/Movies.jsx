import SearchBox from 'components/SearchBox/SearchBox';
import { useEffect, useState } from 'react';
import * as API from '../API/API';
import { useSearchParams } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';

const Movies = () => {
  const [data, setData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('filter') ?? '';
  
  // const [inputValue, setInputValue] = useState(null);

  useEffect(() => {
    const getData = async MovieName => {
      const res = await API.getMoviesByName(MovieName);
      return setData(res);
    };

    getData(movieName);
  }, [movieName]);

  if (!data) return;

  const submitFilter = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  // const filteredMovies = data.filter(item =>
  //   item.title.toLowerCase().includes(movieName.toLowerCase())
  // );

  return (
    <main>
      <SearchBox onSubmit={submitFilter} />
      <MovieList data={data} />
    </main>
  );
};

export default Movies;
