import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Profile() {
  // Retrieve session details
  const { getUser, isAuthenticated } = await getKindeServerSession();
  const user = await getUser();
  const userAuth = await isAuthenticated()
  if(!userAuth){
    redirect('/api/auth/login')
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome, {user?.given_name}!
        </h1>
        <p className="text-gray-700 mt-4">{user?.email }</p>
        <p className="text-green-500 mt-8 text-lg font-semibold">
          Thank You for logging in!
        </p>
      </div>
    </div>
  );
}
