# Formstack task

Project has two parts:

- Frontend
- Backend

Main part is **frontend** - backend is just a simple Express.js app prepared as basic API for frontend.

## Instruction for installing and running project:

- open terminal inside _/backend_ folder
- run `yarn` or `npm i`
- run `node index.js` or `yarn start` or `npm start`

Then:

- open another terminal window inside _/frontend_ folder
- run `yarn` or `npm i`
- run `node index.js` or `yarn start` or `npm start`

## Most important libraries used:

- React.js
- Redux
- Redux-Saga
- Reselect
- Axios

## About:

- Frontend written in Typescript
- Styled with Scss and CSS Modules
- Tests for all reducers and selectors + snapshot tests 2 components
- Initial list from API
- Functionality for removing item (connected to API)
- Adding new item (connected to API)
- Sorting by category
- Selecting an item from the list (it is just kept in state)
- Error handling
