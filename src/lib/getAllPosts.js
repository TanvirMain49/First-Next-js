export default async function getAllPosts(){
    const result = await fetch(` https://jsonplaceholder.typicode.com/posts`)
    .then(res=> res.json())
    console.log(result);
    // const posts = await result.json();
    // console.log(posts);
    // return posts;

}