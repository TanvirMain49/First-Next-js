'use client';
import Card from "@/app/Card/page";


// eslint-disable-next-line @next/next/no-async-client-component
export default function Home ({posts}) {
  return (
    <div className="w-10/12 mx-auto">
        <h2 className="text-center text-3xl my-3">All Post!</h2>
        <div className="grid grid-cols-3 gap-4">
          {
            posts.map(post=><Card key={post.id} post={post}></Card>)
          }
        </div>
    </div>
  );
};
