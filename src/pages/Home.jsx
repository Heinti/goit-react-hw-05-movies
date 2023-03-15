import { useState, useEffect } from 'react';
import * as API from '../API/API';
// import { Link, useLocation } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getTrandingData = async () => {
      const resData = await API.getTrandingDay();
      setData(resData);
    };
    getTrandingData();
  }, []);

  if (!data) return;

  return (
    <>
      <h1>Trending today</h1>
      <MovieList data={data} />
    </>
  );
};

export default Home;
