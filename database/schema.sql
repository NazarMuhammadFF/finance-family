-- Schema for Kelola J.Family (Supabase/PostgreSQL)
-- Uses UUID primary keys and prepares tables for Row Level Security.

-- Families
create table if not exists public.families (
	id uuid primary key default gen_random_uuid(),
	name text not null,
	created_at timestamptz not null default now()
);

-- Users (application profiles, not Supabase auth table)
create table if not exists public.users (
	id uuid primary key default gen_random_uuid(),
	family_id uuid not null references public.families(id) on delete cascade,
	name text not null,
	email citext not null,
	role text not null check (role in ('owner', 'member', 'viewer')),
	created_at timestamptz not null default now(),
	unique (family_id, email)
);

-- Businesses
create table if not exists public.businesses (
	id uuid primary key default gen_random_uuid(),
	family_id uuid not null references public.families(id) on delete cascade,
	name text not null,
	description text,
	created_at timestamptz not null default now()
);

-- Categories (scoped per family)
create table if not exists public.categories (
	id uuid primary key default gen_random_uuid(),
	family_id uuid not null references public.families(id) on delete cascade,
	name text not null,
	type text not null check (type in ('income', 'expense')),
	created_at timestamptz not null default now(),
	unique (family_id, name, type)
);

-- Transactions
create table if not exists public.transactions (
	id uuid primary key default gen_random_uuid(),
	family_id uuid not null references public.families(id) on delete cascade,
	business_id uuid references public.businesses(id) on delete set null,
	category_id uuid not null references public.categories(id) on delete restrict,
	user_id uuid not null references public.users(id) on delete set null,
	type text not null check (type in ('income', 'expense')),
	amount numeric(14,2) not null check (amount > 0),
	payment_method text,
	description text,
	transaction_date date not null,
	created_at timestamptz not null default now()
);

-- Budgets (per family, per category, per month/year)
create table if not exists public.budgets (
	id uuid primary key default gen_random_uuid(),
	family_id uuid not null references public.families(id) on delete cascade,
	category_id uuid not null references public.categories(id) on delete restrict,
	amount numeric(14,2) not null check (amount >= 0),
	month int not null check (month between 1 and 12),
	year int not null check (year >= 2000),
	created_at timestamptz not null default now(),
	unique (family_id, category_id, month, year)
);

-- Debts
create table if not exists public.debts (
	id uuid primary key default gen_random_uuid(),
	family_id uuid not null references public.families(id) on delete cascade,
	title text not null,
	amount numeric(14,2) not null check (amount > 0),
	due_date date,
	status text not null default 'unpaid' check (status in ('unpaid', 'paid')),
	created_at timestamptz not null default now()
);

-- Savings goals
create table if not exists public.savings_goals (
	id uuid primary key default gen_random_uuid(),
	family_id uuid not null references public.families(id) on delete cascade,
	title text not null,
	target_amount numeric(14,2) not null check (target_amount > 0),
	current_amount numeric(14,2) not null default 0 check (current_amount >= 0),
	deadline date,
	created_at timestamptz not null default now()
);

-- Indexes for common filters
create index if not exists idx_users_family_id on public.users (family_id);
create index if not exists idx_businesses_family_id on public.businesses (family_id);
create index if not exists idx_categories_family_id on public.categories (family_id);
create index if not exists idx_transactions_family_id on public.transactions (family_id);
create index if not exists idx_transactions_business_id on public.transactions (business_id);
create index if not exists idx_transactions_category_id on public.transactions (category_id);
create index if not exists idx_transactions_user_id on public.transactions (user_id);
create index if not exists idx_budgets_family_id on public.budgets (family_id);
create index if not exists idx_budgets_category_id on public.budgets (category_id);
create index if not exists idx_debts_family_id on public.debts (family_id);
create index if not exists idx_savings_goals_family_id on public.savings_goals (family_id);

-- Prepare for Row Level Security
alter table public.families enable row level security;
alter table public.users enable row level security;
alter table public.businesses enable row level security;
alter table public.categories enable row level security;
alter table public.transactions enable row level security;
alter table public.budgets enable row level security;
alter table public.debts enable row level security;
alter table public.savings_goals enable row level security;
