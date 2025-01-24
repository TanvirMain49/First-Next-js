import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

import Link from "next/link";

export default async function Header() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="flex items-center w-full justify-between bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Blog Heaven</a>
      </div>
      <div className="flex hidden lg:flex">
        <ul className="flex space-x-2 px-1">
          <nav className="flex gap-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/Profile" className="hover:underline">
              Profile
            </Link>
          </nav>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <LogoutLink className="bg-red-500 btn text-white">Log out</LogoutLink>
        ) : (
          <>
            <div className="flex items-center gap-2">
              <LoginLink className="bg-blue-500 btn text-white">
                log in
              </LoginLink>
              <RegisterLink className="bg-blue-500 btn text-white">
                Sign up
              </RegisterLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

{
  /* <header className="w-full bg-gray-200 text-black ">
            <div className="px-7 py-2 flex justify-between items-center">
                <h2 className="text-xl font-semibold">Blog Heaven</h2>
                <nav className="flex gap-4">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="/Profile" className="hover:underline">Profile</Link>
                </nav>

               
                {
                    user?.email ? <LogoutLink className="bg-red-500 btn text-white">Log out</LogoutLink> : <>

                        <div className="flex items-center gap-2">
                            <LoginLink className="bg-blue-500 btn text-white">log in</LoginLink>
                            <RegisterLink className="bg-blue-500 btn text-white">Sign up</RegisterLink>
                        </div>
                    </>
                }
            </div>
        </header> */
}
