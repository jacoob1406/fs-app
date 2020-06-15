import React from 'react';
import styles from './ListItem.module.scss';
import classNames from 'classnames';
import DeleteItem from '../DeleteItem/DeleteItem';

export interface Props {
  isCompleted: boolean;
  isSelected: boolean;
  text: string;
  category: string;
  index: number;
  onDelete(id: string): void;
  id: string;
  onSelect(id: string): void;
}

const ListItem = ({
  index,
  isCompleted,
  text,
  onDelete,
  id,
  onSelect,
  isSelected,
  category,
}: Props) => {
  const onItemSelect = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (isCompleted) {
      return;
    }
    onSelect(id);
  };
  return (
    <li
      className={classNames(styles.listItem, {
        [styles['listItem--completed']]: isCompleted,
        [styles['listItem--selected']]: isSelected,
      })}
      onClick={onItemSelect}
    >
      <div
        className={classNames(styles.listItem__index, {
          [styles['listItem__index--selected']]: isSelected,
        })}
      >
        {index} <span className={styles.listItem__category}>{category}</span>
      </div>
      <div
        className={classNames(styles.listItem__text, {
          [styles['listItem__text--completed']]: isCompleted,
        })}
      >
        {text}
      </div>
      <DeleteItem onDelete={onDelete} id={id} />
    </li>
  );
};

export default ListItem;
