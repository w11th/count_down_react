import React from 'react';
import ReactDOM from 'react-dom';
import CountDown from './CountDown';
import Bomb from './Bomb';

ReactDOM.render(
  <CountDown startCount={10} >
    {
      (count) => <Bomb count={count}></Bomb>
    }
  </CountDown>
  , document.getElementById('root'));
