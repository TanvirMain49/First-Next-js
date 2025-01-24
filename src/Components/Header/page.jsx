
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";

import Link from "next/link";

export default async function Header() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    return (
        <header className="w-full bg-gray-200 text-black ">
            <div className="px-7 py-2 flex justify-between items-center">
                <h2 className="text-xl font-semibold">Blog Heaven</h2>
                <nav className="flex gap-4">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="/Profile" className="hover:underline">Profile</Link>
                </nav>

                {/* Right side: Button */}
                {
                    user?.email ? <LogoutLink prefetch={false} className="bg-red-500 btn text-white">Log out</LogoutLink> : <>

                        <div className="flex items-center gap-2">
                            <LoginLink className="bg-blue-500 btn text-white">log in</LoginLink>
                            <RegisterLink className="bg-blue-500 btn text-white">Sign up</RegisterLink>
                        </div>
                    </>
                }
            </div>
        </header>
    );
};
