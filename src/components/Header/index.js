import React from 'react';

export class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <div className='uk-container header_container'>
          <h1 className='header_title'>{this.props.title}</h1>
          <a
            href='https://jsonplaceholder.typicode.com/'
            target='_blank'
            className='header_json-placeholder-link uk-link'
          >
            https://jsonplaceholder.typicode.com/
          </a>
        </div>
      </header>
    );
  };
};
