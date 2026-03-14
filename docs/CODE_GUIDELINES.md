# CODE GUIDELINES

This document defines coding standards for the **Kelola J.Family** project.

The purpose is to ensure consistent, maintainable, and scalable code when working with AI agents or developers.

---

# 1. Project Overview

Kelola J.Family is a family finance management application designed to track:

* household expenses
* family business income
* business operational costs
* financial reports

The system supports **multiple families and multiple businesses per family**.

All financial data must always be scoped by **family_id**.

---

# 2. Tech Stack

Frontend:

* Next.js (App Router)
* TypeScript
* TailwindCSS
* shadcn/ui

Backend:

* Next.js API routes / Server Actions

Database:

* Supabase (PostgreSQL)

Cache:

* Redis

Deployment:

* Vercel

---

# 3. Architecture Rules

The project follows a layered structure.

app/
→ UI pages

components/
→ reusable UI components

services/
→ database logic and business logic

hooks/
→ frontend data fetching logic

types/
→ TypeScript type definitions

lib/
→ infrastructure utilities (Supabase, Redis, Auth)

docs/
→ documentation for AI and developers

---

# 4. Database Rules

The database schema uses the following core entities:

families
users
businesses
transactions
categories
budgets
debts
savings_goals

Rules:

1. Every query must include **family_id**.
2. Transactions may have a **business_id** or be household expenses.
3. Household transactions have **business_id = null**.
4. All transactions must have a **category_id**.

---

# 5. API Design Rules

API endpoints should follow REST naming.

Examples:

POST /api/transactions
GET /api/transactions
POST /api/businesses
GET /api/businesses

Business logic must be implemented inside the **services layer**, not inside API routes.

---

# 6. Code Style

Rules:

* Use **TypeScript everywhere**
* Avoid `any`
* Prefer explicit interfaces
* Use async/await
* Use descriptive variable names

Example:

```ts
const transactions = await getTransactionsByFamily(familyId)
```

Avoid:

```ts
const data = await getData()
```

---

# 7. React Guidelines

Use the following rules:

* Server Components by default
* Client Components only when necessary
* Data fetching using hooks or server actions
* Reusable UI components inside `/components`

---

# 8. Folder Naming

Use lowercase folder names.

Examples:

```
dashboard
transactions
businesses
```

Avoid:

```
Dashboard
Transactions
```

---

# 9. Security Rules

Never expose:

* service_role key
* database secrets

Only use:

* Supabase anon public key

All sensitive operations must be validated on the server.

---

# 10. AI Agent Instructions

When generating code:

1. Follow the existing folder structure.
2. Do not introduce new frameworks.
3. Reuse services instead of duplicating logic.
4. Always include `family_id` filtering in database queries.
5. Use TypeScript types from the `/types` folder.

---

# 11. Future Expansion

The architecture must support:

* multiple families
* multiple businesses
* financial reporting
* AI-based financial insights

The system should remain scalable for SaaS usage.
