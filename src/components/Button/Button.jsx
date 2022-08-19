import PropTypes from 'prop-types';
import { LoadMoreBtn, Container } from './Button.styled';

export const Button = ({ text, onClick }) => {
  return (
    <Container>
      <LoadMoreBtn onClick={onClick}>{text}</LoadMoreBtn>
    </Container>
  );
};

Button.propeTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
