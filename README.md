# Weather

## Description

This project was developed using the following technologies:

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [Jest](https://jestjs.io/)

## Demonstration

<img src="./src/assets/images/demo.png" />

## Prerequisites

- Node.js
- npm ou yarn

## How to run the project

1. **Clone the repository or download the project to your machine:**

   ```bash
   git clone https://github.com/leticiafrontend/weather-web
   ```

2. **Install dependencies:**

   ```bash
   yarn
   # or
   npm install
   ```

3. **Create a `.env` file and add the environment variables according to `.env.example`:**

   ```bash
   VITE_BASE_WEATHER_API_KEY=
   VITE_BASE_GOOGLE_API=
   ```

4. **Start the server:**

   ```bash
   yarn dev
   ```

## Commands

- `dev`: runs your application on `localhost`
- `build`: creates the production build version
- `test`: runs jest to test components, functions, hooks and pages
- `test:watch`: runs jest in watch mode
- `lint`: runs the linter in all components and pages
- `format`: runs the linter and fixed in all components and pages
- `prepare`: runs the husky config
- `preview`: create the preview version similar with production version on your machine
