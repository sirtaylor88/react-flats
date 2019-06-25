import React, { Component } from 'react';

export default class Flat extends Component {
  handleClick = (e) => {
    e.preventDefault();
    const { flat, onClick } = this.props;
    onClick(flat.id);
  }

  render() {
    const { flat } = this.props;
    const scriptStyle = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
          url(${flat.imageUrl})`
    };
    return (
      <div className="card" style={scriptStyle} role="presentation" onClick={this.handleClick}>
        <div className="card-category">
          {`${flat.price} ${flat.priceCurrency}`}
        </div>
        <div className="card-description">
          <h2>{flat.name}</h2>
        </div>
        <a className="card-link" href="/">Link</a>
      </div>
    );
  }
}
