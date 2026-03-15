import { supabase } from "@/lib/supabase";
import type { NewTransaction, Transaction } from "@/types/transaction";

export async function listTransactions(
  familyId: string,
): Promise<Transaction[]> {
  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("family_id", familyId)
    .order("date", { ascending: false });

  if (error) throw error;
  return (data as Transaction[]) ?? [];
}

export async function createTransaction(
  input: NewTransaction,
): Promise<Transaction> {
  const { data, error } = await supabase
    .from("transactions")
    .insert(input)
    .select()
    .single();

  if (error) throw error;
  return data as Transaction;
}

export async function deleteTransaction(
  id: string,
): Promise<Transaction | null> {
  const { data, error } = await supabase
    .from("transactions")
    .delete()
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data as Transaction | null;
}
