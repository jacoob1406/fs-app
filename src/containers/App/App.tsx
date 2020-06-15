import React from 'react';
import List from '../List/List';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.appContainer}>
      <header>
        <h1>Bucket list</h1>
      </header>
      <List />
      <footer className={styles.appFooter}>
        specifically for Formstack recruitment purposes
      </footer>
    </div>
  );
}

export default App;
