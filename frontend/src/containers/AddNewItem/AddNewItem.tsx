import React, { FC } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  selectAddItemIsLoading,
  selectAddItemError,
} from './AddNewItemSelectors';
import { RootState } from '../../common/model/RootState';
import AddNewItemComponent from '../../components/AddNewItemForm/AddNewItemForm';
import { addNewListItem } from './AddNewItemActionCreators';
import { AddNewItemBody } from './model/AddNewItemAction';
import { AppError } from '../../common/model/AppError';
import withErrorHandler from '../../components/WithErrorHandler/WithErrorHandler';
import { compose } from 'redux';
import LoaderIndicator from '../../components/Loader/Loader';

interface StateToProps {
  isLoading: boolean;
  error: AppError;
}

interface DispatchToProps {
  addNewListItem(body: AddNewItemBody): void;
}

interface Props extends StateToProps, DispatchToProps {}

const AddNewItem: FC<Props> = ({ isLoading, addNewListItem }: Props) => {
  if (isLoading) {
    return <LoaderIndicator />;
  }
  return <AddNewItemComponent handleSubmit={addNewListItem} />;
};

const mapStateToProps = createStructuredSelector<RootState, StateToProps>({
  error: selectAddItemError,
  isLoading: selectAddItemIsLoading,
});

const mapDispatchToProps: DispatchToProps = {
  addNewListItem,
};

export default compose<typeof React.Component>(
  connect(mapStateToProps, mapDispatchToProps),
  withErrorHandler
)(AddNewItem);
