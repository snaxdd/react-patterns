import React from 'react';
import {Photo} from './Photo';
import {Preloader} from '../Preloader';

export class PhotoBox extends React.Component {
  render() {
    return (
      <section className='photos uk-container'>
        <h2 className='photos_title'>
          Photos
        </h2>
        {this.props.isLoad ? <Preloader/> : <div className='photos_box'>
          {this.props.photos.map(item => {
            return <Photo
              key={item.id}
              title={item.title}
              url={item.url}
            />;
          })}
        </div>}
      </section>
    );
  }
};




