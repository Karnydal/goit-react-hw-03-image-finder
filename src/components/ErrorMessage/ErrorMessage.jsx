import PropTypes from 'prop-types';
import { Text, Container } from './ErrorMessage.styled';

export const ErrorMessage = ({ text }) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired,
};
