import PropTypes from 'prop-types';
import {
  Header,
  SearchForm,
  Input,
  Button,
  SearchIcon,
} from './SearchBar.styled';

export const SearchBar = ({ onSearch }) => {
  const searchImages = e => {
    const input = e.target.elements.input;
    e.preventDefault();

    if (input.value === '') {
      return;
    }

    onSearch(input.value);
  };

  return (
    <Header>
      <SearchForm onSubmit={searchImages}>
        <Button type="submit">
          <span>
            <SearchIcon />
          </span>
        </Button>
        <Input
          name="input"
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};

SearchBar.propeTypes = {
  onSearch: PropTypes.func,
};
