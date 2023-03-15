import { useState, useEffect } from 'react';
import * as API from '../../API/API';
import { useParams } from 'react-router-dom';
import css from '../Cast/Cast.module.css';
const Cast = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getData = async MovieId => {
      const res = await API.getCastById(MovieId);
      return setData(res);
    };

    getData(id);
  }, [id]);

  if (!data) return;

  const BASE_IMG_PATH = 'https://image.tmdb.org/t/p/w500';
  const USER_NOT_FOUND_IMAGE =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCs0nxDmEg-l4K-FtXD2onrbormkXpAkdn6A&usqp=CAU';

  return (
    <div>
      <ul className={css.cast_list}>
        {data.map(({ id, profile_path, original_name, character }) => (
          <li key={id} className={css.cast_item}>
            <img
              className={css.cast__img}
              src={
                profile_path
                  ? `${BASE_IMG_PATH}${profile_path}`
                  : USER_NOT_FOUND_IMAGE
              }
              alt={original_name}
              width={150}
            />
            <p>{original_name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
