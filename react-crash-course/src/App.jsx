

// import React from 'react'
import { useState } from 'react';
import PostList from './components/PostList';
import MainHeader from './components/MainHeader';

import './index.css';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);


  function showModalHander() {
    setModalIsVisible(true)

  }
  function hideModalHandler() {
    setModalIsVisible(false);
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHander}/>
      <main>
        <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
      </main>


    </>
  )
}
