"use client";
import Link from "next/link";
import React, { useState } from "react";

interface subPostListProps {
  posts: Post[];
}

const SubPostList: React.FC<subPostListProps> = ({ posts }) => {
  return (
    <div>
      {posts?.map((post) => (
        <li key={post.id} className="max-w-[400px] mb-3 mx-auto">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </div>
  );
};

export default SubPostList;
