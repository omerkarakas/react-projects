import React, { useState, useEffect, useContext } from 'react';
import BookmarkContext from '../context/BookmarkContext';

function AddBookmark({}) {
  const [mode, setMode] = useState('insert');

  const { bm, formVisible, showForm, saveBookmark } =
    useContext(BookmarkContext);

  const [name, setName] = useState(bm?.name);
  const [url, setUrl] = useState(bm?.url);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('no default');
    const bm = {
      name,
      url,
    };
    saveBookmark(bm);
    showForm(false);
  };

  const cancelForm = () => {
    setName(null);
    setUrl(null);
    setMode('insert');
    showForm(false);
  };

  useEffect(() => {
    if (bm) {
      setName(bm.name);
      setUrl(bm.url);
      setMode('update');
    }
  }, [bm]);

  return (
    formVisible && (
      <div className="modal-container" id="modal">
        <div className="modal">
          <i className="fas fa-times close-icon" id="close-modal"></i>
          <div className="modal-header">
            <h3>Add Bookmark</h3>
          </div>
          <div className="modal-content">
            <form onSubmit={(e) => handleSubmit(e)} id="bookmark-form">
              <div className="form-group">
                <label htmlFor="website-name" className="form-label">
                  Website Name
                </label>
                <input
                  type="text"
                  className="form-input"
                  id="website-name"
                  placeholder=""
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="website-url" className="form-label">
                  Website URL
                </label>
                <input
                  type="text"
                  className="form-input"
                  id="website-url"
                  placeholder=""
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>

              <button type="submit" className="modal-button">
                Save
              </button>
              <input
                type="button"
                className="modal-button"
                value="Cancel"
                onClick={() => cancelForm()}
              />
            </form>
          </div>
        </div>
      </div>
    )
  );
}

export default AddBookmark;
