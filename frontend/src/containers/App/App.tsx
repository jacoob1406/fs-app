import React from 'react';
import List from '../List/List';
import styles from './App.module.scss';
import AddNewItem from '../AddNewItem/AddNewItem';

function App() {
  return (
    <div className={styles.appContainer}>
      <header className={styles.appContainer__header}>
        <h1>Bucket list</h1>
      </header>
      <AddNewItem />
      <List />
      <footer className={styles.appContainer__footer}>
        specifically for Formstack recruitment purposes
      </footer>
    </div>
  );
}

export default App;
