# Learning NestJS

## Common Commands

### Installation

Install all node modules:

```sh
npm install
```

### Testing

To run all tests:

```sh
npm run test
```

### Dev Environment

To get the hot-reloading dev environment:

```sh
npm run watch
```

You can access the Nest.JS website at this URL: http://localhost:4000

You can access the REST API at this URL: http://localhost:3000

You can access the automatically generated swagger docs here: http://localhost:3000/api-docs

## Add a new entity type

```sh
nest g resource files
```

## Generate OpenAPI Wrapper

```sh
npm run gen-api-wrapper
```

# TODO

Add in nx builing with multiple packages, a NestJS-based API server, a user+org service, and a Next.js website

- /apps
  - /next-app
  - /nest-api-server
- /packages
  - /api-wrapper
