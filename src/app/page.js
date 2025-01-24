import Home from "@/Components/home";
import Card2 from "./card2/page";
// import getAllPosts from "@/lib/getAllPosts";

const result = await fetch(` https://jsonplaceholder.typicode.com/posts`)
.then(res=> res.json())
console.log(result);
export default async function Page() {



  return (
    <div className="w-10/12 mx-auto">
        <h2 className="text-center text-3xl my-3">All Post!</h2>
        <div className="grid grid-cols-3 gap-4">
          {
            result?.map(post=><Card2 key={post?.id} post={post}></Card2>)
          }
        </div>
    </div>
  );
}
