import React, { FC } from 'react';
import styles from './SortSwitch.module.scss';

interface Props {
  onSwitch(isSorted: boolean): void;
  isSwitched: boolean;
}

const SortSwitch: FC<Props> = ({ onSwitch, isSwitched }: Props) => {
  const onSortCheck = (event: React.ChangeEvent<HTMLInputElement>) =>
    onSwitch(event.currentTarget.checked);

  return (
    <div className={styles.sortSwitchContainer}>
      Sort by category:
      <label className={styles.switch}>
        <input onChange={onSortCheck} type='checkbox' checked={isSwitched} />
        <span className={`${styles.slider} ${styles.round}`}></span>
      </label>
    </div>
  );
};

export default SortSwitch;
