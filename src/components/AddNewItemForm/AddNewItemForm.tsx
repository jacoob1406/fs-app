import React, { useState, FC } from 'react';
import styles from './AddNewItemForm.module.scss';
import { AddNewItemBody } from '../../containers/AddNewItem/model/AddNewItemAction';

interface Props {
  handleSubmit(values: AddNewItemBody): void;
}

const AddNewItemForm: FC<Props> = ({ handleSubmit }: Props) => {
  const [category, setCategory] = useState<string>('Career');
  const [description, setDescription] = useState<string>('');

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) =>
    setCategory(event.currentTarget.value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setDescription(event.currentTarget.value);

  const isDescriptionEmpty = (): boolean => description === '';

  const submitAddItem = (event: React.MouseEvent | React.FormEvent) => {
    if (isDescriptionEmpty()) {
      event.preventDefault();
      return;
    }
    handleSubmit({ category: category, text: description });
    setDescription('');
  };

  return (
    <section className={styles.addItemContainer}>
      <h2 className={styles.addItemContainer__heading}>Add new item:</h2>
      <form onSubmit={submitAddItem} className={styles.addItemContainer__form}>
        <div className={styles['addItemContainer__form--item']}>
          <label>Category:</label>
          <select onChange={handleSelect} value={category}>
            <option value='Career'>Career</option>
            <option value='Family'>Family</option>
            <option value='Travelling'>Travelling</option>
          </select>
        </div>
        <div className={styles['addItemContainer__form--item']}>
          <label>Text:</label>
          <input type='text' value={description} onChange={handleInputChange} />
        </div>
      </form>
      <button
        className={styles.addItemContainer__button}
        onClick={submitAddItem}
        disabled={isDescriptionEmpty()}
      >
        Add
      </button>
    </section>
  );
};

export default AddNewItemForm;
