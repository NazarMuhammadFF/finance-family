# API Specification

## Create Transaction

POST /api/transactions

body:
{
 amount: number
 type: income | expense
 category_id: uuid
 business_id: uuid
}

## Get Transactions

GET /api/transactions
