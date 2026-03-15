export type TransactionType = "income" | "expense";

export interface Transaction {
  id: string;
  family_id: string;
  business_id?: string | null;
  amount: number;
  type: TransactionType;
  date: string;
  note?: string | null;
  created_at?: string;
  updated_at?: string;
}

export type NewTransaction = Omit<
  Transaction,
  "id" | "created_at" | "updated_at"
>;
