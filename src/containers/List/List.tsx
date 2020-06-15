import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { ListItem } from './model/ListState';
import {
  selectListData,
  selectListIsLoading,
  selectListIsSorted,
  selectListError,
} from './ListSelectors';
import { RootState } from '../../common/model/RootState';
import ListComponent from '../../components/List/List';
import { getListData, sortListData } from './ListActionCreators';
import { deleteListItem } from '../DeleteItem/DeleteItemActionCreators';
import LoaderIndicator from '../../components/Loader/Loader';
import { compose } from 'redux';
import withErrorHandler from '../../components/WithErrorHandler/WithErrorHandler';
import { AppError } from '../../common/model/AppError';

interface StateToProps {
  data: ListItem[];
  isLoading: boolean;
  isSorted: boolean;
  error: AppError;
}

interface DispatchToProps {
  getListData(): void;
  deleteListItem(id: string): void;
  sortListData(isSorted: boolean): void;
}

interface Props extends StateToProps, DispatchToProps {}

class List extends Component<Props> {
  public componentDidMount() {
    this.props.getListData();
  }

  render() {
    const {
      data,
      deleteListItem,
      sortListData,
      isSorted,
      isLoading,
    } = this.props;
    if (isLoading) {
      return <LoaderIndicator />;
    }
    return (
      <ListComponent
        items={data}
        onDelete={deleteListItem}
        sortItems={sortListData}
        isSorted={isSorted}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector<RootState, StateToProps>({
  data: selectListData,
  isLoading: selectListIsLoading,
  isSorted: selectListIsSorted,
  error: selectListError,
});

const mapDispatchToProps: DispatchToProps = {
  getListData,
  deleteListItem,
  sortListData,
};

export default compose<typeof React.Component>(
  connect(mapStateToProps, mapDispatchToProps),
  withErrorHandler
)(List);
