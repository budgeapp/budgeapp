"use server";

import { createServerClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export interface CreateAccountValues {
  name: string;
}

export const createAccount = async (values: CreateAccountValues) => {
  const supabase = createServerClient();

  const data = {
    ...values,
    user_id: (await supabase.auth.getUser()).data!.user!.id,
  };

  await supabase.from("accounts").insert(data);
  revalidatePath("/(dashboard)/@accounts");
};
