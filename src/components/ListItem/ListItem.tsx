import React from 'react';
import styles from './ListItem.module.scss';
import classNames from 'classnames';
import DeleteItem from '../DeleteItem/DeleteItem';

interface Props {
  isCompleted: boolean;
  text: string;
  index: number;
  onDelete(id: string): void;
  id: string;
}

const ListItem = ({ index, isCompleted, text, onDelete, id }: Props) => (
  <li
    className={classNames(styles.listItem, {
      [styles['listItem--completed']]: isCompleted,
    })}
  >
    <div className={styles.listItem__index}>{index}</div>
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

export default ListItem;
