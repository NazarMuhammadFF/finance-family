export interface Business {
  id: string;
  family_id: string;
  name: string;
  category?: string | null;
  description?: string | null;
  is_active?: boolean;
  created_at?: string;
  updated_at?: string;
}

export type NewBusiness = Omit<Business, "id" | "created_at" | "updated_at">;
