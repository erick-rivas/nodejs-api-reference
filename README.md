# Node.js API

This repository holds the source code of a **template** for the development of a **Node.js api** written mainly in typescript
<br/><br/><br/>

## Before start ##

### Demo ###

This template uses a Pet CRUD example to explain the API flux. Each example file has an underscore prefix, *e.g. _Pet.ts* 

### Cascade explanation ###

Each directory contains a README&#46;md file with specific explanation about each module of the arquitecture (e.g. /http/controllers)
<br/><br/>

## Architecture design

The template uses a architecure based on [Uncle Bob Clean architecture](https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html). and a Generic Model View Controller pattern

### Overview ### 
For handle common server actions, the templates use the following structure:
  - /src: business logic source
  - /http: Handle http resources such as endpoints, controllers and websockets
  - /assets: Project resources such as scripts, images and files

### Business logic ###
  - /models: Store the system model, *e.g. Car, Agency, etc*
  - /repositories: Represent abstraction (interfaces) of system actions grouped by source, *e.g. sql, gmail, etc*
  - /datasource: Are the implementations of the repository methods. Each datasouce includes commons patterns such as mappers and executors

### Http resources ###
  - /controllers: Are the link between the business logic and http routes (GETs, SETs, PUTs)
  - /extensions: Are auxiliary classes in case of complex use case *e.g AI, ML, third party syncs*
  - /tests: Are jMeter files for endpoint testing

### Assets ###
  - /dev: Resources related to the development of the project *e.g db.sql*
  - /public: Resources that are public via /resources *e.g profile_image.png, doc.pdf*
<br/><br/>

## Pre-requisites:

 * Download & install [Node js](https://nodejs.org/en/download/) or an equivalent
 * Download & install [Visual Studio code](https://code.visualstudio.com/) or an equivalent (optional)

### To start coding and build:

 * Clone this repository
 * Create an .env file with the project credentials (See [example](./.env.example))
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
 $ apidoc -i http/ -o docs/ -t assets/dev/docs_template/
 ```

  ### Examples *Pets CRUD*

 * Example docs
 ```bash
 http://localhost:4000/docs
 ```
  * Example requests 
 ```bash
 GET http://localhost:4000/v1/toys
 ```


