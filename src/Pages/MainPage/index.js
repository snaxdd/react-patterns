import React from 'react';
import {Header} from './../../components/Header/index';
import {PhotosContainer} from './../../components/Photos';

export class MainPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header title='JSON Placeholder Testing' />
        <PhotosContainer />
      </React.Fragment>
    );
  };
};
