# Next TS app template with structure by features

## Description
Hello there ✌️

This project originally started as a template for my own projects, where I wanted to implement a structure by features.

Now, I'm excited to share it with you, hoping that it may be of help like others developers inspired me. 🚀

Please keep in mind that this project is a continuous work in progress, and I'm constantly seeking ways to improve and refine it.

Your feedback and contributions are welcome and appreciated. 🙏

Thank you for considering my template.

## Table of Contents

- [Prerequisites](#prerequisites),
- [Features](#features)
- [Commands](#commands)
- [Structure](#structure)
- [Environment variables](#environment-variables)

## Prerequisites
- Node.js (>=18.0.0),
- NPM (>=8.0.0) or Yarn (>=1.22.0)

## Features

- **Framework**: build with [NextJS](https://nextjs.org/),
- **Type checking**: using [TypeScript](https://www.typescriptlang.org/) and [PropTypes](https://www.npmjs.com/package/prop-types),
- **Testing**: with [Jest](https://jestjs.io/fr/), [Testing library](https://testing-library.com/) and [Cypress](https://www.cypress.io/),
- **Linting**: with [ESLint](https://eslint.org) and [Prettier](https://prettier.io),
- **Components**: using [React](https://fr.reactjs.org/),
- **PreProcessing**: with [Sass](https://sass-lang.com/),
- **Icons**: with [FontAwesome](https://fontawesome.com),
- **Environment variables**: using [Dotenv](https://github.com/motdotla/dotenv) and [Cross-env](https://github.com/kentcdodds/cross-env#readme),
- **Git hooks**: with [Husky](https://github.com/typicode/husky),
- **Dependency management**: using [NPM](https://www.npmjs.com/),
- **Continuous integration**: using [CircleCi](https://circleci.com/),
- **Containerization** : using [Docker](https://www.docker.com/).

## Commands
### Development mode

```bash
npm run dev
```

### Production mode

```bash
npm run start
```

### Building

```bash
npm run build
```

### Testing

```bash
# run all tests
npm run test

# run all tests with coverage
npm run test:coverage
```

### Running with Docker

```bash
# run the app in development mode
npm run docker:dev

# run the app in production mode
npm run docker:prod

# run all tests
npm run docker:test
```

### Linting

```bash
# run ESLint
npm run lint

# run prettier
npm run prettier

# fix prettier errors
yarn prettier:fix
```

## Structure

``` 
src/
    |-- __mocks__/           # Folder for mock files used in tests
    |-- __tests__/           # Folder for test-related files
        
    |-- assets/              # Folder for asset files (fonts, icons, images, etc.)
    |   |-- fonts/           # Font files
    |   |-- icons/           # Icon files
    |   |-- images/          # Image files
    
    |-- components/          # Reusable UI components
    |-- features/            # Files related to application features
    |-- interfaces/          # Interface files defining types and contracts
    |-- layouts/             # Components composition
    |-- pages/               # Page components used as NextJs routing
    |-- services/            # Service-related files
    
    |-- styles/              # Folder for styling files
    |   |-- abstracts/       # Abstract styles (variables, mixins, etc.)
    |   |-- base/            # Base styles
    |   |-- components/      # Component-specific styles
    |   |-- layouts/         # Layout-specific styles
    |   |-- pages/           # Page-specific styles
    |   |-- themes/          # Theme-specific styles
    |   |-- vendors/         # Vendor styles
    
    |-- utils/               # Utility files
    |-- api/                 # Files related to API communication

    |-- App.tsx              # Root component of the React application. 
    |-- Index.tsx            # Entry point for the React application.  

```

# Environment variables
```bash
# PORTS
DEV_PORT=3000 # The local port number used for development environment
TEST_PORT=3000 # The local port number used for test environment
PROD_PORT=80 # The local port number used for production environment

# DOCKER CONFIGURATION
IMAGE_NAME=image-name
CONTAINER_NAME=container-name

DEV_IMAGE_NAME=dev-image-name # The name of the Docker image used in development environment
TEST_IMAGE_NAME=test-image-name # The name of the Docker image used in test environment
PROD_IMAGE_NAME=prod-image-name # The name of the Docker image used in production environment

DEV_CONTAINER_NAME=dev-container-name # The name of the Docker container used in development environment
TEST_CONTAINER_NAME=test-container-name # The name of the Docker container used in test environment
PROD_CONTAINER_NAME=prod-container-name # The name of the Docker container used in production environment

DEV_EXPOSED_PORT=3000 # The port number that the Docker container will listen on
TEST_EXPOSED_PORT=3000 # The port number that the Docker container will listen on
PROD_EXPOSED_PORT=80 # The port number that the Docker container will listen on
```
