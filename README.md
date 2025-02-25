# React Store App

Product store where users can:

- Create and delete products
- Add/remove products from the cart
- The app runs at `http://localhost:5173/` and connects to a local JSON server at `http://localhost:5000/`.
- Cart items and products are managed in the app state and persisted in the server.
- Fully mobile responsive.

## Installation & Setup

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed.

### Steps

1. Clone the repo:

   ```sh
   git clone https://github.com/ydobrev-intellias/ReactStateApp.git
   cd ReactStateApp
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the app (this script will start both the app and the server):
   ```sh
   npm run start
   ```

## Technologies Used

- React
- Redux Toolkit
- JSON Server
- Fetch API
