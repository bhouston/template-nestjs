# Learning NestJS

# Run Dev Environment

To run the dev environment:

```sh
npm install
npm run start:dev
```

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

Add in nx builing with multiple packages, a NestJS-based API server, a user+org service, JWT authentication, and a Next.js website

- /apps
  - /next-app
  - /nest-api-server
- /packages
  - /api-wrapper
