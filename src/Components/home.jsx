import Card2 from "@/app/card2/page";

// eslint-disable-next-line @next/next/no-async-client-component

export default async function Home () {
  return (
    <div className="w-10/12 mx-auto">
        <h2 className="text-center text-3xl my-3">All Post!</h2>
        {/* <div className="grid grid-cols-3 gap-4">
          {
            posts?.map(post=><Card2 key={post?.id} post={post}></Card2>)
          }
        </div> */}
    </div>
  );
};
