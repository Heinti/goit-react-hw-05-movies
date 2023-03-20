import { Link, useLocation } from 'react-router-dom';
import css from './MovieInfo.module.css';

const MovieInfo = ({ data }) => {
  
  const location = useLocation();

  console.log(location);

  const { 
    title, 
    vote_average, 
    release_date, 
    overview, 
    genres, 
    backdrop_path,
  } = data;

  const yearOfRelease = new Date(release_date).getFullYear();
  const BASE_IMG_PATH = 'https://image.tmdb.org/t/p/w500';
  // const posterImage = `${BASE_IMG_PATH}${backdrop_path}`;
  const roundUserScore = Math.round(vote_average * 10);
  const USER_NOT_FOUND_IMAGE =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCs0nxDmEg-l4K-FtXD2onrbormkXpAkdn6A&usqp=CAU';

  return (
    <div className={css.info}>
      <div className={css.movie_Details}>
        <img
          src={
            backdrop_path
              ? `${BASE_IMG_PATH}${backdrop_path}`
              : USER_NOT_FOUND_IMAGE
          }
          alt=""
          width={240}
          height={320}
        />
        <ul>
          <li>
            <h1>
              {title} ({yearOfRelease})
            </h1>
            <p>User Score: {roundUserScore}%</p>
          </li>
          <li>
            <h2>Overview</h2>
            <p>{overview}</p>
          </li>
          <li>
            <h2>Genres</h2>
            {genres.map(item => (
              <p key={item.id}>{item.name}</p>
            ))}
          </li>
        </ul>
      </div>
      <div>
        <hr />
        <p>Additional Information</p>
        <ul>
          <li>
            <Link className={css.info__link} state={{from: location.state?.from}} to={'cast'} >Cast</Link>
          </li>
          <li>
            <Link className={css.info__link} state={{from: location.state?.from}} to={'reviews'}>Reviews</Link>
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default MovieInfo;
