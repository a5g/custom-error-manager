## Custom Error Management for Mocha and Chai tests

## Prerequisites

- Nodejs 8.x [Install Nodejs 8.x or later version using [nvm](https://github.com/creationix/nvm) or [Node.js](https://nodejs.org/en/)]
- Chrome latest version
- [Java 1.8](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- [gulpjs](https://gulpjs.com/) [\> npm install -g gulp-cli]

## Clone the repository

\> git clone git@github.com:a5g/custom-error-manager.git

## Switch to `custom-error-manager` folder

\> cd custom-error-manager

### Install required node_modules

\> npm install

## Run Tests

\> gulp test

## Test Reports

To view the HTML Test reports <br />
allure: <br />
\> gulp report

junit: <br />
\> gulp report:junit

mochawesome: <br />
\> open target/test-results/report.html
