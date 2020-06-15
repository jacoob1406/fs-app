const { v4: uuidv4 } = require("uuid");

class List {
  constructor(
    category,
    text,
    isCompleted = false,
    id = uuidv4(),
  ) {
    this.category = category;
    this.text = text;
    this.isCompleted = isCompleted;
    this.id = id;
  }
}

module.exports = List;
