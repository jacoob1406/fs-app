import React, { FC } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectAddItemIsLoading } from './AddNewItemSelectors';
import { RootState } from '../../common/model/RootState';
import AddNewItemComponent from '../../components/AddNewItemForm/AddNewItemForm';
import { addNewListItem } from './AddNewItemActionCreators';
import { AddNewItemBody } from './model/AddNewItemAction';

interface StateToProps {
  isLoading: boolean;
  // error: AppError | null;
}

interface DispatchToProps {
  addNewListItem(body: AddNewItemBody): void;
}

interface Props extends StateToProps, DispatchToProps {}

const AddNewItem: FC<Props> = ({ isLoading, addNewListItem }: Props) => (
  <AddNewItemComponent handleSubmit={addNewListItem} />
);

const mapStateToProps = createStructuredSelector<RootState, StateToProps>({
  // error: selectAddItemError,
  isLoading: selectAddItemIsLoading,
});

const mapDispatchToProps: DispatchToProps = {
  addNewListItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewItem);
