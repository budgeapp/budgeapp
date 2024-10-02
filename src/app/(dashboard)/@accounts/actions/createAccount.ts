"use server";

import { createServerClient } from "@/utils/supabase/server";

export const createAccount = async (formData: FormData) => {
  const supabase = createServerClient();

  const data = {
    name: formData.get("name") as string,
    user_id: (await supabase.auth.getUser()).data!.user!.id,
  };

  const response = await supabase.from("accounts").insert(data);
  console.debug(response);
};
