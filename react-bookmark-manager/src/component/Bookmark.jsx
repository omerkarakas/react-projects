import React, { useContext } from 'react';
import { FaTimes, FaEdit } from 'react-icons/fa';
import BookmarkContext from '../context/BookmarkContext';

function Bookmark({ bm }) {
  const { deleteBookmark, editBookmark, showForm } =
    useContext(BookmarkContext);

  const deleteBM = (bm) => {
    deleteBookmark(bm);
    //console.log(url, 'deleted');
  };

  const editBM = (bm) => {
    showForm(true);
    editBookmark(bm);
  };

  return (
    <div className="item">
      <div className="name">
        <img
          src={`https://s2.googleusercontent.com/s2/favicons?domain=${bm.url}`}
          alt="Favicon"
        />
        <a href={bm.url} target="_blank">
          {bm.name}
        </a>
        <FaTimes
          className="delete-icon"
          onClick={() => deleteBM(bm)}
          style={{ color: 'red', cursor: 'pointer' }}
        />

        <FaEdit
          className="edit-icon"
          onClick={() => editBM(bm)}
          style={{ color: 'green', cursor: 'pointer' }}
        />
      </div>
    </div>
  );
}

export default Bookmark;
