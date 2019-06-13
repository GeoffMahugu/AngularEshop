# Eshop
This an [Angular](https://angular.io) project thats a starter kit to anyone trying to build an ecommerce site.

### Features Include
* Lazy Loading
* Service Worker
* Push Notifications
* Firebase Database and Hosting 

The project is being hosted on firebase🔥 at: [Demo](https://vazi-aa474.firebaseapp.com/)

![Preview](https://user-images.githubusercontent.com/17265995/59413597-8c664900-8dc8-11e9-8ac6-2f4dbaa1f9ab.png)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build For Production and Optimization
Run `npm run build:prod` to build the project for produion. The production files will be found in the Dist folder at the root of your project.

## Host Project on Firebase
Run `npm run build:host` to build the project for produion and initialize the hosting process

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Personal project setup
There are a few things that you need to change for your own environment. On the environment.ts file, change the firebaseConfig settings to match your firebase console settings.

firebaseConfig: {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
  }

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
