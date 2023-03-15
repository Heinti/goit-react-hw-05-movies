import { useParams, Outlet, useLocation } from 'react-router-dom';
import * as API from '../API/API';
import { Suspense, useEffect, useState } from 'react';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import ButtonBack from 'components/ButtonBack/ButtonBack';

const MovieDetails = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  const location = useLocation();

  useEffect(() => {
    const getData = async MovieId => {
      const res = await API.getMovieById(MovieId);
      return setData(res);
    };

    getData(id);
  }, [id]);

  if (!data) return;

  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <main>
      <ButtonBack path={backLinkHref}>Go back</ButtonBack>
      <MovieInfo data={data} />
      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  );
};
export default MovieDetails;
