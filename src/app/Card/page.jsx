"use client";
import Link from "next/link";

const Card = ({post}) => {
    return (
<div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{post.title}</h2>
    <p>{post.body}</p>
    <div className="card-actions justify-center">
      <Link href={`/Card/${post.id}`}><button className="btn btn-primary">Read More</button></Link>
    </div>
  </div>
</div>
    );
};

export default Card;