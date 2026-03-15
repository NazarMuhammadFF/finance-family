import { supabase } from "@/lib/supabase";
import type { Business, NewBusiness } from "@/types/business";

export async function listBusinesses(familyId: string): Promise<Business[]> {
  const { data, error } = await supabase
    .from("businesses")
    .select("*")
    .eq("family_id", familyId)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return (data as Business[]) ?? [];
}

export async function createBusiness(input: NewBusiness): Promise<Business> {
  const { data, error } = await supabase
    .from("businesses")
    .insert(input)
    .select()
    .single();

  if (error) throw error;
  return data as Business;
}

export async function setBusinessActiveState(
  id: string,
  isActive: boolean,
): Promise<Business | null> {
  const { data, error } = await supabase
    .from("businesses")
    .update({ is_active: isActive })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data as Business | null;
}
