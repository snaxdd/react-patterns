import React, {Component} from 'react';

export class Photo extends Component {
  render() {
    return (
      <div className='photos_photo'>
        <img
          src={this.props.url}
          alt={this.props.title}
          className='photos_photo-img'
        />
        <span className='photos_photo-title'>{this.props.title}</span>
      </div>
    );
  }
}
