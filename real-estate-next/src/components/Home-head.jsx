// src/components/Head.jsx
import React from 'react';
import '../assets/css/indexstyle.css';
import Header from '../assets/imgs/head/head.png';
import Image from 'next/image';

function Head() {
  return (
    <header>
     <Image className="head" src={Header} alt="header" />
    </header>

  );
}

export default Head;
