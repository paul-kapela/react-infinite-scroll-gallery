import { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Masonry from 'react-masonry-css';

import { SMALL_SCREEN_WIDTH } from '../constants/layout';

import Image from './Image';

const Grid = styled.div`
  width: 100%;
  column-gap: 2rem;

  @media only screen and (max-width: ${SMALL_SCREEN_WIDTH}) {
    column-width: calc(50vw);
  }

  @media only screen and (min-width: ${SMALL_SCREEN_WIDTH}) {
    column-width: calc(33vw - 5rem);
  }
`;

class Images extends Component {
  constructor() {
    super();
    
    this.state = {
      showLoadButton: false,
      loading: false,
      page: 1,
      fetchLimit: 10,
      images: [],
      error: null
    }
  }

  setupObserver = () => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    };

    this.observer = new IntersectionObserver(this.handleObserver, options);

    this.observer.observe(this.loadingRef);
  }

  getImages = () => {
    this.setState({ loading: true });

    const url = `https://picsum.photos/v2/list?page=${this.state.page}&limit=${this.state.fetchLimit}`;

    axios
      .get(url)
      .then(res => {
        this.setState({
          images: [...this.state.images, ...res.data.map(image => {
            let width = Math.round(image.width / 4);
            let height = Math.round(image.height / 4);

            image.width = width;
            image.height = height;
            image.download_url = `https://picsum.photos/id/${image.id}/${width}/${height}`;

            return image;
          })]
        });

        this.setState({ loading: false, page: this.state.page + 1 });
      })
      .catch(err => {
        console.log(err);
      });
    
  }

  onVisible = index => {
    if ((index === this.state.images.length - 1)) {
      this.getImages();
    }
  }

  componentDidMount() {
    this.getImages();
  }

  render() {
    return (
      <Masonry
        breakpointCols={{
          default: 3,
          601: 3,
          600: 1
        }}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {
          this.state.images.map((image, index) => {
            return (
              <Image key={index} image={image} onVisible={() => this.onVisible(index)} style={{ paddingTop: '100%' }}/>
            );
          })
        }
      </Masonry>
    );
  }
}

export default Images;