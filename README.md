# feathers-react

> 

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

And uses [ReactJs](https://facebook.github.io/react/). A JAVASCRIPT LIBRARY FOR BUILDING USER INTERFACES.

## Getting Started

Getting up and running is as easy as 1, 2, 3, 4, 5.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

2. Install your dependencies
    
    ```
    npm install
    ```

3. Start your app for development

Make sure to install `nwb` globally provides an nwb command for start react development server:

	```
	npm install -g nwb
    ```

To run:

    ```
    npm run start-dev
    ```

4. Build react app for prodcution
    
    ```
    npm run build
    ```

5. Start your app in production
    
    ```
    npm start
    ```

- `npm run clean` will delete built resources.

## Testing

- Simply run `npm test` and all your tests in the `test/` directory will be run.

- `npm test` will run the react tests once.

- `npm run test:coverage` will run the react tests and produce a coverage report in `coverage/`.

- `npm run test:watch` will run the react tests on every change.

## Scaffolding api

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g feathers-cli             # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers generate model                 # Generate a new Model
$ feathers help                           # Show all commands
```


## Changelog

__0.1.0__

- Initial release

## License

Copyright (c) 2016

Licensed under the [MIT license](LICENSE).
