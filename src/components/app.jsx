import React, { Component } from 'react';
import FlatList from './flat_list';
import GoogleMap from './google_map';
import flats from '../../data/flats';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      center: {
        lat: 47.824905,
        lng: 2.618787
      },
      zoom: 5
    };
  }

  select = (id) => {
    const selectedFlat = flats.find(flat => flat.id === id);
    this.setState({
      center: {
        lat: selectedFlat.lat,
        lng: selectedFlat.lng
      },
      zoom: 15
    });
  }

  render() {
    const { center, zoom } = this.state;
    return (
      <div className="container">
        <FlatList onClick={this.select} />
        <GoogleMap center={center} zoom={zoom} />
      </div>
    );
  }
}
