# Mail Sender - Backend & Client

This is a project for a simple email sender using different mail providers. In
this version, we are using Mailtrap as our SMTP. Other mail providers will be
added as time goes on.

## Prerequisites

- Node.js installed
- NPM or Yarn installed

## Setting Up the Project

### Client

1. Open a terminal in the project root.
2. Navigate to the client folder: `cd client`
3. Create a .env file in the client folder using the .env.example file as a
   reference: `cp .env`
4. Replace `VITE_AXIOS_BASE_URL` in the .env file with the URL of your deployed
   backend.

### Backend

1. Open a terminal in the project root.
2. Create a .env file in the backend folder using the .env.example file as a
   reference: `cp backend/.env`
3. Replace `MAILTRAP_API_KEY` in the backend/.env file with your own Mailtrap
   API key.
4. Replace `BACKEND_PORT` in the backend/.env file with the desired port number
   for your backend server.

## Running the Project

### Client

1. Navigate to the client folder: `cd client`
2. Install the dependencies: `npm install` or `yarn`
3. Start the development server: `npm start` or `yarn start`

### Backend

1. Navigate to the backend folder: `cd backend`
2. Install the dependencies: `npm install` or `yarn`
3. Start the server: `npm start` or `yarn start`

## Accessing the Application

1. Open a web browser and navigate to the URL displayed in the terminal after
   starting the client development server.

## Project Structure

#### client

- public
- src
  - assets
  - components
  - types
  - utils
  - App.tsx
  - index.tsx
  - .env.example

#### backend

- src
  - controllers
  - emailTemplates
  - utils
  - index.js
  - .env.example
- .gitignore
- README.md

The `client` folder contains the frontend application, built using React.

The `backend` folder contains the server application, built using Node.js and
Express.

The `.env` and `.env.example` files are used to store environment variables,
such as API keys and port numbers.

The `README.md` file contains detailed instructions on how to set up and run the
project.
