import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as API from '../../API/API';

const Reviews = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getData = async MovieId => {
      const res = await API.getReviewsById(MovieId);
      return setData(res);
    };

    getData(id);
  }, [id]);

  if (!data) return;

  return (
    <div>
      <ul>
        {data === [] ? (
          data.map(({ id, author, content }) => (
            <li key={id}>
              <h2>{author}</h2>
              <p>{content}</p>
            </li>
          ))) : 'We dont have any reviews for this movie'}
      </ul>
    </div>
  );
};

export default Reviews;
