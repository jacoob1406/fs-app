import React, { FC } from 'react';
import styles from './DeleteItem.module.scss';

interface Props {
  onDelete(id: string): void;
  id: string;
}

const DeleteItem: FC<Props> = ({ onDelete, id }: Props) => {
  const onDeleteClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const id: string = event.currentTarget.dataset.id || '';
    onDelete(id);
  };
  return (
    <button className={styles.deleteBtn} data-id={id} onClick={onDeleteClick}>
      <i className='fa fa-trash' aria-hidden />
    </button>
  );
};

export default DeleteItem;