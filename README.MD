# Quotes API built with NodeJS, Express and Typescript

This API provides a collection of quotes, most of them philosophic ones, including also bible versicles, study thoughts and literature quotations.
Inicially, this project does not include a connection with any database,keeping the content in a _json_ file, so that you cannot insert new quotes, but maybe some day. The focus of this api is provide the full list of quotes or, specially, a random quote by each fetch.

## Routes

- `https://nodejs-quotations-api.vercel.app/quotes`: retrive all the quotes available;
- `https://nodejs-quotations-api.vercel.app/quotes/random`: retrive a random quote;
