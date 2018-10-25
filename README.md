# TDD With React

TDD with React. I've got a few different tutorials and examples represented here:

- [Jest Tutorial](https://jestjs.io/docs/en/tutorial-react)
- [LevelUpTuts React Tutorial](https://www.youtube.com/watch?v=D9DdY2WmM-s)

## Info on Tests

### Snapshot Tests

- They work by taking a snapshot, performing a hard-coded action/change, then taking another snapshot and comparing the two.
- Example: [Link.react.test.js](./tdd-react/src/__tests__/Link.react.test.js)

### DOM Tests

- They work by creating a mock DOM (I think?), simulating the changes and comparing those changes to the expected result.
- Example: [CheckboxWithLabel.test.js](./tdd-react/src/CheckboxWithLabel.test.js)

### Unit Tests

- Pretty simple. They test exactly one thing at a time.
  - Example: The "Add" function in LevelUpApp

### Integration Tests

- So named because they test one function that uses a different function.
  - Example: The "Total" function in LevelUpApp

## To Run App

1. Clone the repo.
2. From the command line, cd into the project directory (in this case, it's `/TDD-React/tdd-react`)
3. `npm install`
4. `yarn install`
5. `npm start`

## To Test App

1. Ensure you're in the `/TDD-React/tdd-react` directory
1. From the command line run `yarn test`
1. This will continue to watch the tests and notify you if one fails.
