// src/components/Head.jsx
import React from 'react';
import '../assets/css/indexstyle.css';
import Header from '../assets/imgs/head/head.png';

function Head() {
  return (
    <header>
     <img className="head" src={Header} alt="header" />
    </header>

  );
}

export default Head;
