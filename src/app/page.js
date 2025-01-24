import Home from "@/Components/home";
import getAllPosts from "@/lib/getAllPosts";

export default async function Page() {
  const posts = await getAllPosts();

  if (!posts) {
    return <div>No posts available</div>;
  }

  return (
    <div>
      <Home posts={posts} />
    </div>
  );
}
