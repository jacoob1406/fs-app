import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { ListItem } from './model/ListState';
import { selectListData, selectListIsLoading } from './ListSelectors';
import { RootState } from '../../common/model/RootState';
import ListComponent from '../../components/List/List';
import { getListData } from './ListActionCreators';
import { deleteListItem } from '../DeleteItem/DeleteItemActionCreators';

interface StateToProps {
  data: ListItem[];
  isLoading: boolean;
}

interface DispatchToProps {
  getListData(): void;
  deleteListItem(id: string): void;
}

interface Props extends StateToProps, DispatchToProps {}

class List extends Component<Props> {
  public componentDidMount() {
    this.props.getListData();
  }

  render() {
    const { data, isLoading, deleteListItem } = this.props;
    console.log(isLoading);
    return <ListComponent items={data} onDelete={deleteListItem} />;
  }
}

const mapStateToProps = createStructuredSelector<RootState, StateToProps>({
  data: selectListData,
  isLoading: selectListIsLoading,
});

const mapDispatchToProps: DispatchToProps = {
  getListData,
  deleteListItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
