
import Home from "@/Components/home";
import getAllPosts from "@/lib/getAllPosts";

// This function runs server-side only
export default async function Page() {
  const posts = await getAllPosts();
  return (
    <div>
      <Home posts={posts}/>
    </div>
  );
}
