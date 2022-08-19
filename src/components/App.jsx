import { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { Button } from './Button/Button';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { SearchBar } from './SearchBar/SearchBar';
import { fetchAPI } from './Services/fetchAPI';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVE: 'resolve',
  REJECTED: 'rejected',
};
export class App extends Component {
  state = {
    images: [],
    inputValue: '',
    currentPage: 1,
    modalImg: '',
    showModal: false,
    status: Status.IDLE,
    totalHits: '',
  };

  getInputValue = inputValue => {
    this.setState({
      inputValue: inputValue,
      images: [],
      currentPage: 1,
    })
  };

  componentDidUpdate(prevProps, prevState) {
    const { inputValue, currentPage } = this.state;

    if (this.props.inputValue === '') {
      return;
    }

    if (prevState.inputValue !== inputValue ||
      prevState.currentPage !== currentPage) {
      
      if (currentPage === 1) {
        this.setState({
          status: Status.PENDING,
        })
      }
      this.fetchImages();

      if (currentPage > 1) {
        scroll.scrollToBottom();
      }
    }
  };

  async fetchImages() {
    const { inputValue, currentPage } = this.state;
    try {
      let { hits, totalHits } = await fetchAPI(inputValue, currentPage);
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        totalHits: totalHits,
        status: Status.RESOLVE,
      }));
    } catch (error) {
      alert();
    }
  };

  handleIncrementCurrentPage = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  getLargeImageUrl = url => {
    this.toggleModal();
    this.setState({ modalImg: url })
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }))
  };

  render() {
    const { showModal, status, images, modalImg, totalHits, currentPage } = this.state;
    const endOfHits = currentPage * 12 >= totalHits;
    return (
      <div>
        <SearchBar onSearch={this.getInputValue} />
        {status === 'pending' && <Loader />}
        {status === 'resolve' && (
          <ImageGallery images={images} onClick={this.getLargeImageUrl} />
        )}
        {status === 'resolve' && !endOfHits && (
          <Button
            text={'Load more'}
            onClick={this.handleIncrementCurrentPage}
          />
        )}
        {images.length === 0 && status === 'resolve' && (
          <ErrorMessage text="Nothing found" />
        )}
        {status === 'rejected' && <ErrorMessage text="Something went wrong!" />}
        {showModal && (
          <Modal onClose={this.toggleModal} largeImage={modalImg} />
        )}
      </div>
    );
  };  
};
