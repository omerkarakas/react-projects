import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return JSON.parse(localStorage.getItem('list'));
  } else return [];
};

function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [alert]);

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  const showAlert = (msg = '', type = '') => {
    setAlert({ show: true, msg, type });
  };

  const deleteItem = (id) => {
    showAlert('Item deleted', 'success');
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    setIsEditing(true);
    setEditID(id);
    setName(list.find((item) => item.id === id).title);
  };

  const clearItems = () => {
    showAlert('All items deleted', 'success');
    setList([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert('enter value', 'danger');
      return;
    }

    if (isEditing) {
      showAlert('item updated', 'success');

      // first way, moves the edited item to end of the list.
      // const currentItem = { id: editID, title: name };
      // const newList = list.filter((item) => item.id !== editID);
      // setList([...newList, currentItem]);

      // second way, map to the new list, update the specific item inside
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );

      setName('');
      setIsEditing(false);
      setEditID(null);
      showAlert('item updated', 'success');
      return;
    }

    showAlert('item added to the list', 'success');
    const newItem = { id: new Date().getTime().toString(), title: name };
    setList([...list, newItem]);
    setName('');
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} />}
        <h3>Shopping List</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. bread"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} deleteItem={deleteItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearItems}>
            Clear Items
          </button>
          <h5 style={{ textAlign: 'center' }}>
            Your list is stored in your browser cache
          </h5>
        </div>
      )}
    </section>
  );
}

export default App;
