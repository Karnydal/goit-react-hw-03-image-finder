// import PropTypes from 'prop-types';
import { TailSpin } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderContainer>
      <TailSpin color="#00BFFF" height={100} width={100} />
    </LoaderContainer>
  );
};
