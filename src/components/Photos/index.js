import React from 'react';
import {PhotoBox} from './PhotoBox';

export class PhotosContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      photos: []
    };
  }

  loadPhotos = async (count = 10) => {
    this.setState({
      isLoaded: !this.state.isLoaded
    });

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/photos',
        {
          method: 'GET',
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
        }
      );

      if (!response.ok) {
        throw new Error('Что-то пошло не так ...');
      }

      const data = await response.json();

      this.setState({
        isLoaded: !this.state.isLoaded
      });

      let photos = [];

      for (let i = 0; i < count; i++) {
        photos.push(data[i]);
      }

      this.setState((prevState) => ({
        photos
      }));
    } catch (e) {
      this.setState((prevState) => ({
        error: e.message
      }));
    }
  };

  componentDidMount() {
    this.loadPhotos(20);
  }

  render() {
    return (
      <PhotoBox
        isLoad={this.state.isLoaded}
        photos={this.state.photos}
        error={this.state.error}
      />
    );
  }
}
