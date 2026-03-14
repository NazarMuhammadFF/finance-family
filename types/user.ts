export type UserRole = "owner" | "admin" | "member";

export interface UserProfile {
  id: string;
  email: string;
  family_id?: string | null;
  role?: UserRole;
  display_name?: string | null;
  avatar_url?: string | null;
  created_at?: string;
  updated_at?: string;
}
