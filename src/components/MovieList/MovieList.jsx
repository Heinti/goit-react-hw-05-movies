import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import css from './MovieList.module.css'

export const MovieList = ({data}) => {
    const location = useLocation();
  return (
    <div>
      <ul>
        {data.map(({ id, title, name }) => {
          return (
            <li key={id}>
              <Link className={css.list__link} state={{ from: location }} to={`/movies/${id}`}>
                {' '}
                {title ? title : name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

MovieList.propTypes = {
  data: PropTypes.array,
}