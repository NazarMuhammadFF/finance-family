# Database Schema

## families
- id
- name
- created_at

## users
- id
- family_id
- name
- email
- role

## businesses
- id
- family_id
- name

## transactions
- id
- family_id
- business_id
- category_id
- amount
- type
- transaction_date
