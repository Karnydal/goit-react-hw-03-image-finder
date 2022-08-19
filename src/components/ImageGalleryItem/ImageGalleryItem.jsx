import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webImage, largeImage, tags, onClick }) => {
  return (
    <Item>
      <Image src={webImage} alt={tags} onClick={() => onClick(largeImage)} />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  webImage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
