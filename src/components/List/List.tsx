import React from 'react';
import ListItem from '../ListItem/ListItem';
import styles from './List.module.scss';

const List = ({ items, onDelete }: any) => {
  if (items.length === 0) {
    return <p>NO ITEMS</p>;
  }
  return (
    <ul className={styles.list}>
      {items.map((item: any, index: number) => (
        <ListItem
          key={item.id}
          text={item.text}
          isCompleted={item.isCompleted}
          index={index + 1}
          id={item.id}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default List;
