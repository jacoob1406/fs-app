import React, { FC } from 'react';
import styles from './CompleteButton.module.scss';

interface Props {
  onDelete(id: string): void;
  id: string;
}

const CompleteButton: FC<Props> = ({ onDelete, id }: Props) => {
  const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const id: string = event.currentTarget.dataset.id || '';
    onDelete(id);
  };
  return (
    <button className={styles.completeBtn} data-id={id} onClick={onClick}>
      Complete
    </button>
  );
};

export default CompleteButton;
