import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function middleware(request) {
  const session = await getKindeServerSession();
  const { isAuthenticated } = session;
  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("https://tanvirmahin.kinde.com/auth/cx/_:nav&m:login&psid:01949608fa05b5b134ab7f2f0aa324e1", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/Profile"],
};
