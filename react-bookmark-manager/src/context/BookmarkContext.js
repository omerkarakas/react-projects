import { createContext, useState, useEffect } from 'react';

const BookmarkContext = createContext(null);

const initialBms = [
  {
    name: 'oracle',
    url: 'http://oracle.com',
  },
  {
    name: 'udemy',
    url: 'http://udemy.com',
  },
];

export const BookmarkProvider = ({ children }) => {
  const [bm, setBm] = useState({});
  const [bookmarks, setBookmarks] = useState([]);
  const [bmStatus, setBmStatus] = useState('insert');
  const [formVisible, setFormVisible] = useState(false);

  const showForm = (show, empty = false) => {
    setFormVisible(show);
    if (empty) {
      setBm({});
      setBmStatus('insert');
    } else {
      setBmStatus('update');
    }
  };

  function loadBookmarks() {
    let bms = [];
    if (localStorage.getItem('bookmarks'))
      bms = JSON.parse(localStorage.getItem('bookmarks'));
    else {
      bms = [{ name: 'google-docs', url: 'http://docs.google.com' }];
      localStorage.setItem('bookmarks', JSON.stringify(bms));
    }
    //console.log(bms);
    setBookmarks(bms);
  }

  useEffect(() => {
    loadBookmarks();
  }, []);

  const saveBookmarks = () => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    console.log(bookmarks);

    //loadBookmarks();
  };

  const addBookmark = (newBookmark) => {
    setBm(newBookmark);
    setBookmarks([newBookmark, ...bookmarks]);
    saveBookmarks();
  };

  const editBookmark = (newBookmark) => {
    setBm(newBookmark);
    setBmStatus('update');
  };

  const deleteBookmark = (bookmark) => {
    let filteredBookmarks = [];
    filteredBookmarks = bookmarks.filter((b) => b.url !== bookmark.url);
    console.log(filteredBookmarks);
    setBookmarks(filteredBookmarks);
    saveBookmarks();
  };

  const saveBookmark = (bmrk) => {
    let result = [];
    if (bmStatus === 'insert') result = [bmrk, ...bookmarks];
    // update
    else
      result = bookmarks.map((b) => (b.url === (bmrk && bmrk.url) ? bmrk : b));

    setBookmarks(result);
    saveBookmarks();
  };

  return (
    <BookmarkContext.Provider
      value={{
        bm,
        bookmarks,
        formVisible,
        // addBookmark,
        editBookmark,
        deleteBookmark,
        saveBookmark,
        showForm,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkContext;
