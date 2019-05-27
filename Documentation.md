## Documentation about Nodejs Installation, to install Node you have to have npm installed or yarn installed

-   Node.js is an open source server environment.

-   Node.js allows you to run JavaScript on the server.

-   $ sudo apt-get install nodejs

-   $ sudo apt-get install npm

## Once you've installed it, check the installed version of the node and npm

-   $ node -v

-   $ npm -v

## This is how to start, test or run your node server 

-   This is the global way, you will create a file script.js

-   $ node script.js

## But in our case we are integrating Node into the React App and that's why we make of Babel, because our pure javascript doesn't understand import, that's why we are making use of babel to understand JSX syntax

-   In our case we use the $ yarn start, but you can also use $ npm start. 

-   YARN and NPM are almost the same but slightly different, so the both are used for the        same purpose.

## Expressjs Installation

-   Express facilitates the rapid development of Node based Web applications. Following are      some of the core features of Express framework:

-   Allows to set up middlewares to respond to HTTP Requests.

-   Defines a routing table which is used to perform different actions based on HTTP Method      and URL.

-   Allows to dynamically render HTML Pages based on passing arguments to templates.

-   $ npm install express --save

## Body parser Installation

-   Body parser is a node.js middleware for handling JSON, Raw, Text and URL encoded form data.

-   $ npm install body-parser --save

## Babel Installation

-   Babel is a toolchain that is mainly used to convert our regular ES 5 code of JavaScript      to ES 6. We use babel to transform the syntax from the regular JS code into JSX codes

-   $ npm install --save-dev @babel/core @babel/cli @babel/preset-env

## Nodemon Installation

-   Nodemon is a utility that will restart server at any given time a file is changed

-   $ npm install -g nodemon

## Mongoose Installation

-   Mongoose is a MongoDB object modeling tool designed to work in an asynchronous               environment.

-   $ npm install mongoose

## Bcrypt Installation

-   Bcrypt is a library to help you hash passwords.

-   $ npm install bcrypt

## Bluebird Installation

-   Bluebird is a fully featured promise library with focus on innovative features and           performance.

-   $ npm install bluebird

-   In ES 5 var Promise = require("bluebird");

-   Alternatively in ES 6 import * as Promise from "blue-bird";