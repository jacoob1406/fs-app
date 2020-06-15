import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { ListItem } from './model/ListState';
import {
  selectListData,
  selectListIsLoading,
  selectListIsSorted,
} from './ListSelectors';
import { RootState } from '../../common/model/RootState';
import ListComponent from '../../components/List/List';
import { getListData, sortListData } from './ListActionCreators';
import { deleteListItem } from '../DeleteItem/DeleteItemActionCreators';

interface StateToProps {
  data: ListItem[];
  isLoading: boolean;
  isSorted: boolean;
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
      isLoading,
      deleteListItem,
      sortListData,
      isSorted,
    } = this.props;
    console.log(isLoading);
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
});

const mapDispatchToProps: DispatchToProps = {
  getListData,
  deleteListItem,
  sortListData,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
