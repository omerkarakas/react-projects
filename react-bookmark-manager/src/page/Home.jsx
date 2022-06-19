import React, { useState } from 'react';
import { useContext } from 'react';
import Bookmarks from '../component/Bookmarks';
import AddBookmark from './AddBookmark';
import BookmarkContext from '../context/BookmarkContext';

function Home({}) {
  const { bm, bookmarks, formVisible, showForm } = useContext(BookmarkContext);

  return (
    <div>
      <h1 id="app-heading">Bookmark Manager</h1>
      <h1 id="show-modal" onClick={() => showForm(true, true)}>
        Add Bookmark
      </h1>
      <AddBookmark />
      <Bookmarks />
    </div>
  );
}

export default Home;
