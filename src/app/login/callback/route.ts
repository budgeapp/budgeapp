import { getURL } from "@/utils/getURL";
import { createServerClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const authCode = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";
  const url = getURL();

  if (authCode) {
    const supabase = createServerClient();
    const { error } = await supabase.auth.exchangeCodeForSession(authCode);

    if (!error) {
      return NextResponse.redirect(`${url}${next}`);
    }
  }

  return NextResponse.redirect(`${url}/login`);
}
