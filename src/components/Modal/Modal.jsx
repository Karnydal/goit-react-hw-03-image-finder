import { Component } from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalWindow } from './Modal.styled';

export class Modal extends Component {
  static propTypes = {
    onClose: PropTypes.func.isRequired,
    largeImage: PropTypes.string.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleClickBackdrop}>
        <ModalWindow>
          <img src={this.props.largeImage} alt="" />
        </ModalWindow>
      </Overlay>
    );
  }
};
