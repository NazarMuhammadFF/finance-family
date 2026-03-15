import type { Transaction } from "@/types/transaction";

interface UseTransactionsResult {
  data: Transaction[];
  isLoading: boolean;
  error: Error | null;
}

export function useTransactions(): UseTransactionsResult {
  return {
    data: [],
    isLoading: false,
    error: null,
  };
}
