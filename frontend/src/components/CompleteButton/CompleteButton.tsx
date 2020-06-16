import React, { FC } from 'react';
import styles from './CompleteButton.module.scss';

interface Props {
  onDelete(id: string): void;
  id: string;
}

const CompleteButton: FC<Props> = ({ onDelete, id }: Props) => {
  const onClick = () => {
    onDelete(id);
  };
  return (
    <button className={styles.completeBtn} onClick={onClick}>
      Complete
    </button>
  );
};

export default CompleteButton;
