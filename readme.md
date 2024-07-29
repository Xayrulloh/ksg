
# Fastify Skinport technical task

This is the backend Node.js - Fastify application to see details of items and logic of withdrawing balance.


## API Reference

#### Get all items

```http
  GET /items
```


#### Withdraw the balance of user
#### **Required**. id of user and amount to withdraw

```http
  POST /deduction/${id}
```
#### **Body**

| Key | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `amount`      | `number` | **Required**. Amount of money |




## Installation

```
git clone https://github.com/ndoubleu/fastify.git && cd fastify
pnpm i
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

**Required:**

`SKINPORT_API_URL`

`CACHE_TTL`

`PORT`

`HOST`

`DB_URL`



## Usage

#production
```
pnpm run start 
```

#development
```
pnpm run dev
```



## Database

If Database connection is established and no table of users or table of users is empty, the table or/and 1 user will be generated with amount of 1000 by application 
