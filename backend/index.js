const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const ListDatabase = require('./db/db');
const List = require('./db/classes/List');

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

const PORT = 4000;

const list = new ListDatabase();

app.get("/api/list", (req, res) => res.send(list.items));

app.post('/api/list/new', (req, res) => {
  const category = req.body.category;
  const text = req.body.text;
  const item = new List(
    category,
    text,
  );
  list.addListItem(item);

  res.status(201).send({
    success: 'true',
    message: 'Item was added!',
    item
  });
});

app.delete("/api/list/delete/:id", (req, res) => {
  const id = req.params.id;
  if (list.getAllListItems().find((item) => item.id === id)) {
    list.deleteItem(id);
    res.status(201).send({
      success: "true",
      message: `Item with ID ${id} was successfully deleted!`,
    });
  } else {
    res.send({
      success: "false",
      message: `There is no item with ID ${id}!`,
    });
  }
});

app.listen(PORT, () =>
  console.log(`FS backend app is running on port ${PORT}`)
);
