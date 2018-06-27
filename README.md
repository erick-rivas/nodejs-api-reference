# Node JS API

This repository holds the source code for the **template** for the development of an **Node js api** written mainly in typescript

## Architecture design

The template uses a architecure based on "uncle bob clean architecture" (https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html). and a Generic Model View Controller pattern

## Overview
![alt text](/assets/dev/architecture.png)


* **Based on express.js:** For handle common server actions, Linkbox Hana care uses the express.js template which is organized in the following way:
  - /src: business logic source
  - /routes: Endpoints representation (POSTs, GETs, etc)
  - /controllers: Represent the link between /routes and /datasources
  - /public: Public resources such as stylesheets, images and scripts

* **Business logic:** For the business logic, Linkbox Hana use the following structure
  - /models: Store the system model (Patient, doctor, etc)
  - /repositories: Represent abstraction of system actions grouped by source (e.g sql, cache, facebook-api, etc)
  - /datasource: Are the implementations of the repository methods.
  - /mappers: Represents classes that convert external data (e.g json queries) to business models (e.g Patient)

### Pre-requisites:

 * Download & install [**Node js**](https://nodejs.org/en/download/) or an equivalent
 * Download & install [**Visual Studio code**](https://code.visualstudio.com/) or an equivalent (optional)

### To start coding and build:

 * Clone this repository
 * Install dependencies
 ```bash
 $ npm install
 ```
 * Install typescript
 ```bash
 $ npm install -g typescript
 ```
 * Compile typescript (Optional)
 ```bash
 $ tsc
 ```
 * Run server
 ```bash
 $ npm start
 ```

 ### To generate documentation

 * Install apidoc
 ```bash
 $ npm install apidoc -g
 ```
 * Generate docs
 ```bash
 $ apidoc -i http/ -o docs/ -t docs/template/
 ```