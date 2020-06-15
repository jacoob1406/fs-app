import React, { useState, FC } from 'react';
import ListItem from '../ListItem/ListItem';
import styles from './List.module.scss';
import SortSwitch from '../SortSwitch/SortSwitch';

interface Item {
  id: string;
  text: string;
  isCompleted: boolean;
  category: string;
}
interface Props {
  items: Item[];
  onDelete(id: string): void;
  sortItems(isSorted: boolean): void;
  isSorted: boolean;
}

const List: FC<Props> = ({ items, onDelete, sortItems, isSorted }: Props) => {
  const [currentId, setCurrentId] = useState('');

  if (items.length === 0) {
    return <p>NO ITEMS</p>;
  }
  return (
    <section className={styles.listContainer}>
      <SortSwitch onSwitch={sortItems} isSwitched={isSorted} />
      <ul className={styles.listContainer__itemsList}>
        {items.map((item: any, index: number) => (
          <ListItem
            key={item.id}
            text={item.text}
            isCompleted={item.isCompleted}
            index={index + 1}
            id={item.id}
            onDelete={onDelete}
            onSelect={() => setCurrentId(item.id)}
            isSelected={currentId === item.id}
            category={item.category}
          />
        ))}
      </ul>
    </section>
  );
};

export default List;
