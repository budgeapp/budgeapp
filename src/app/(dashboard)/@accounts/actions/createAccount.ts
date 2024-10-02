"use server";

import { createServerClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export const createAccount = async (formData: FormData) => {
  const supabase = createServerClient();

  const data = {
    name: formData.get("name") as string,
    user_id: (await supabase.auth.getUser()).data!.user!.id,
  };

  await supabase.from("accounts").insert(data);
  revalidatePath("/(dashboard)/@accounts");
};
