# Getting Started

Before you can run this application you will have to confugure database access, create a new database login, create a new database and seed the newly created database.

## Update your pg_hba.conf file

Update your pg_hba.conf file with the following line

```
local bigspring_casestudy_ijkten bigspring_casestudy_ijkten md5
```

## Create a new login and a database

Run the following commands by going into psql

```
create role bigspring_casestudy_ijkten with login password 'bigspring_casestudy_ijkten';
create database bigspring_casestudy_ijkten owner bigspring_casestudy_ijkten;
```

Run the command below to populate the database

```
npm i
npm run seed
```

## Running the application

Run the following command to start the server

```
npm run dev
```

## Routes

The following routes for locales and cards can be found below

### Get all locales in use

GET /api/v1/locales

### Get locale by id

GET /api/v1/locales/:id

### Create a new locale

POST /api/v1/locales
{"locale":"de-CH"}

### Get all cards

GET /api/v1/cards

### Get a card by id with a locale

GET /api/v1/cards/:id
This route accepts Accept-Language header

### Create a card

POST /api/v1/cards/locale/5
{"question": "", "answer": ""}

### Create a localized card

POST /api/v1/cards/1/locale/5
{"question": "", "answer": ""}

## Tests

Before you can run tests you will have to confugure database access, create a new database login, create a new database and seed the newly created database.

## Update your pg_hba.conf file

Update your pg_hba.conf file with the following line

```
local bigspring_casestudy_ijkten_test bigspring_casestudy_ijkten_test md5
```

## Create a new login and a database

Run the following commands by going into psql

```
create role bigspring_casestudy_ijkten_test with login password 'bigspring_casestudy_ijkten_test';
create database bigspring_casestudy_ijkten_test owner bigspring_casestudy_ijkten_test;
```

Run the command below to populate the database

```
npm t
```
