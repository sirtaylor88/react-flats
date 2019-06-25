import React from 'react';
import Flat from './flat';
import flats from '../../data/flats';

const FlatList = ({ onClick }) => {
  return (
    <div className="flat-list">
      {flats.map((flat) => {
        return (
          <div className="card">
            <Flat flat={flat} key={flat.id} onClick={onClick} />
          </div>
        );
      })}
    </div>
  );
};

export default FlatList;
