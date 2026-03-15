import type { Business } from "@/types/business";

interface UseBusinessesResult {
  data: Business[];
  isLoading: boolean;
  error: Error | null;
}

export function useBusinesses(): UseBusinessesResult {
  return {
    data: [],
    isLoading: false,
    error: null,
  };
}
