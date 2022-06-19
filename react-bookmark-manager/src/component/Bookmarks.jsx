import React, { useContext } from 'react';
import Bookmark from './Bookmark';
import BookmarkContext from '../context/BookmarkContext';

function Bookmarks({}) {
  const { bookmarks } = useContext(BookmarkContext);

  return (
    <div className="bookmark-list">
      {bookmarks.map((bm) => (
        <Bookmark key={bm.url} bm={bm} />
      ))}
    </div>
  );
}

export default Bookmarks;
