import type { FamilyReport } from "@/services/reportService";

interface UseReportsResult {
  data: FamilyReport | null;
  isLoading: boolean;
  error: Error | null;
}

export function useReports(): UseReportsResult {
  return {
    data: null,
    isLoading: false,
    error: null,
  };
}
