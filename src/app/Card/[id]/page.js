import getPost from "@/lib/getPost";

export default async function PostDetails({ params }) {
    const { id } = params;  
    const post = await getPost(id);
    return (
        <div className="mt-6 text-center max-w-3xl mx-auto">
            <h2 className="mb-8 text-5xl">Blogs Details ({id})</h2>
            <div className="border border-black p-4 rounded-xl">
                <h2 className="text-left text-3xl text-blue-500">Title: {post.title}</h2>
                <p className="text-left text-xl">Description: {post.body}</p>
            </div>
        </div>
    );
}
