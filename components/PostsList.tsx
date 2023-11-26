"use client";
import Link from "next/link";
import React from "react";

interface postslistProps {
  posts: Post[];
}

const PostsList: React.FC<postslistProps> = ({ posts }) => {
  return (
    <>
      <ul>
        {posts?.map((post) => (
          <li key={post.id} className="max-w-[400px] mb-3 mx-auto">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostsList;
