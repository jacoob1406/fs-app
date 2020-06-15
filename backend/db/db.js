const List = require('./classes/List');

class ListsDatabase {
  constructor() {
    this.items = [];
    this.addListItem(new List('Career', 'Amazing job', false));
    this.addListItem(new List('Travelling', 'Japan', true));
    this.addListItem(new List('Travelling', 'Italy', true));
    this.addListItem(new List('Travelling', 'New York', false));
    this.addListItem(new List('Travelling', 'Poland', false));
    this.addListItem(new List('Career', 'Great atmosphere', false));
    this.addListItem(new List('Family', '3 kids and a dog', true));
  }

  getAllListItems() {
    return this.items;
  }

  getCompletedListItems() {
    return this.items.filter(item => item.isCompleted);
  }

  sortListItems(sortId) {
    return this.items.sort((a, b) => a[sortId].localeCompare(b[sortId]));
  }

  addListItem(item) {
    this.items.push(item);
  }

  deleteItem(id) {
    this.items = this.items.filter(item => item.id !== id);
  }
}

module.exports = ListsDatabase;
