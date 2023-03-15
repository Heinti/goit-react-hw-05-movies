import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBox = ({onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="movie"
        // value={value}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  onSubmit: PropTypes.func,
}