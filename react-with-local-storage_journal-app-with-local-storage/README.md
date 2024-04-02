# React with Local Storage: Journal App with Local Storage

Make your journal entries persistent by saving them to local storage.

## Task

Install the [`use-local-storage-state`](https://github.com/astoilkov/use-local-storage-state) package and use it to make the journal entries persistent.

> 💡 Does it make sense to also put the `filter` state into local storage? What are the differences to the user experience?

SOLUTION: Storing the filter setting in local storage ensures the users viewing preferences persist across sessions, offering consistency without needing to reset views upon each visit. However, if the filter is intended for short-term use rather than as a permanent preference, using React's useState makes each session start with a default view, avoiding confusion from immediately seeing a filtered list.

## Development

### Local Development

To work locally, please install the dependencies using `npm i` first.

Run `npm run start` to start a development server and open the displayed URL in a browser.

Use `npm run test` to run the tests.

### CodeSandbox Cloud

Select the "Preview: 3000" tab to view this project.

Select the "Tests: logs" tab to view the tests.

> The `npm run start` and `npm run test` scripts run automatically.

### Scripts

You can use the following commands:

- `npm run start` to start a development server
- `npm run build` to build the project
- `npm run test` to run the tests
