import React, { useState } from 'react';
import GitUsers from './GitUsers';
import '../App.css';
import store from '../store';
import {Provider} from 'react-redux';


export default () => {

  return (
    <Provider store={store}>
      <div className="container">
        <GitUsers/>
      </div>
    </Provider>
  );
};
