import { supabase } from "@/lib/supabase";
import type { Transaction, TransactionType } from "@/types/transaction";

export interface FamilyReport {
  income: number;
  expense: number;
  net: number;
}

export async function getFamilyReport(familyId: string): Promise<FamilyReport> {
  const { data, error } = await supabase
    .from("transactions")
    .select("amount, type")
    .eq("family_id", familyId);

  if (error) throw error;

  const transactions = (data as Pick<Transaction, "amount" | "type">[]) ?? [];

  const totals = transactions.reduce(
    (acc, txn) => {
      const amount = Number(txn.amount) || 0;
      if (txn.type === "income") acc.income += amount;
      if (txn.type === "expense") acc.expense += amount;
      return acc;
    },
    { income: 0, expense: 0 },
  );

  return { ...totals, net: totals.income - totals.expense } satisfies FamilyReport;
}

export async function getRecentActivity(
  familyId: string,
  limit = 5,
  type?: TransactionType,
): Promise<Transaction[]> {
  let query = supabase
    .from("transactions")
    .select("*")
    .eq("family_id", familyId)
    .order("date", { ascending: false })
    .limit(limit);

  if (type) {
    query = query.eq("type", type);
  }

  const { data, error } = await query;
  if (error) throw error;

  return (data as Transaction[]) ?? [];
}