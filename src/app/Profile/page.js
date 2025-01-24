import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Profile() {
  // Retrieve session details
  const { getUser, isAuthenticated } = await getKindeServerSession();


  if (!await isAuthenticated()) {
    // If not authenticated, return null or show some loading state if needed
    return null;
  }

  const user = await getUser();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome, {user?.given_name || "User"}!
        </h1>
        <p className="text-gray-700 mt-4">{user?.email || "No email provided"}</p>
        <p className="text-green-500 mt-8 text-lg font-semibold">
          Thank You for logging in!
        </p>
      </div>
    </div>
  );
}
