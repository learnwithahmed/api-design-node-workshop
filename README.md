# API design Workshop

> Ahmed Abdulrahman | Creative Developer @Oakwood

- [API design Workshop](#api-design-workshop)
  - [Requirements](#requirements)
  - [Tools](#tools)
  - [Exercises](#exercises)
    - [Hello World](#hello-world)
    - [Routing](#routing)
    - [Create Schemas](#create-schemas)
    - [Controllers](#controllers)
    - [Authentication](#authentication)

## Requirements

In order to follow a long with workshop, make sure you install the followings:

- [Nodejs](https://nodejs.org/en/): Lastest version >= 10
- [Yarn](https://yarnpkg.com/lang/en/docs/install/) or [NPM](https://nodejs.org/en/): They are both package manager but yarn is prefered for version locking
- [Insomnia](https://insomnia.rest/) or [Postman](https://www.postman.com/): they are REST client that allwos you to test calls to APIs.
- [MongoDB](https://docs.mongodb.com/manual/administration/install-community/)
- [Robomongo](https://robomongo.org/): Its a visual tool helping you manage Database MongoDB.

## Tools

You need to have an Code Editor to start with the project. Pick you favorite:

- [VSCode](https://code.visualstudio.com/)
- [Atom](https://atom.io/)
- [SublimeText](https://www.sublimetext.com/)

## Exercises

You need to check out to each exercise branch as the course progresses.

### Hello World
> branch - `lesson-1`

In this exercise, we'll be creating a simple Express based API in node:

- [ ] Install dependencies with yarn or npm
- [ ] Create a route that sends back some json
- [ ] Create a route that accepts json and logs it
- [ ] Start the server

### Routing 
> branch - `lesson-2`

In this exercise, you'll be creating routes and sub routers for DB resources using Express routing and routers

- [ ] Create a router for the Item resource
- [ ] Create full crud routes and create placeholder controllers
- [ ] Mount router on the root server

### Create Schemas
> branch - `lesson-3`

In this exercise, you'll be taking what you learned about Mongoose and MongoDb to create a Schema and Model for the Item resource.

- [ ] Create a schema for the item resource
- [ ] Add the correct fields (look at test)
- [ ] Add the correct validations (look at test)
- [ ] _extra_ add compund index to ensure all tasks in a list have unique names

### Controllers
> branch - `lesson-4`

In this exercise, we'ill hook our routes up to our Models so we can perfom _CRUD_ on the models based on the routes + verbs. That's exactly what controllers do.

- [ ] Create CRUD Resolvers in `helpers/crud.js`
- [ ] Create Controllers for the Item resources using the base CRUD resolvers

### Authentication
> branch - `lesson-5`

In this exercise, we'll be securing down our API using JWT's (JSON Web Token)

- [ ] Create a Signup controller
- [ ] Create a Signin controller
- [ ] Create a protect middlware to lock down API routes
