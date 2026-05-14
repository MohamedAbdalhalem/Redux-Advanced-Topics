# Redux Advanced Topics

A small React + Redux Toolkit project that demonstrates a **shopping cart flow** with:

- **Redux Toolkit slices** (`cartSlice`, `uiSlice`)
- **Async Redux actions (thunks)** to **fetch** and **send** cart data
- A simple UI that works well on **mobile, tablet, and desktop**


## Getting started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm start
```

Open `http://localhost:3000`.

## What you can do in the app

- Browse a small list of products
- Add products to the cart
- Increase/decrease quantity inside the cart
- Toggle the cart visibility from the header

## Scripts

- **start**: run development server
- **build**: create a production build
- **test**: run tests

## Project structure (important parts)

- `src/App.js`: app composition + triggers fetch/send cart side effects
- `src/store/`
  - `index.js`: Redux store setup
  - `cartSlice.js`: cart state + reducers
  - `uiSlice.js`: UI state (cart open/close, notifications)
  - `cartActions.js`: async actions for syncing cart data
- `src/components/`: UI components (cart, products, layout, notification)

## Notes

- This project was bootstrapped with **Create React App** (`react-scripts`).
- The product list currently uses dummy data in `src/components/Shop/Products.js`.

