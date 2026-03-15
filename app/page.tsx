import { supabase } from "@/lib/supabase"

export default async function Home() {

  const { data, error } = await supabase
    .from("categories")
    .select("*")

  console.log("DATA:", data)
  console.log("ERROR:", error)

  return (
    <div>
      Supabase Test Connection
    </div>
  )
}
