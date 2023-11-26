// server component amar jodi kono heavy weight import library thake taile ami eita server e run korte parbo client e run korbo na .

import PostsList from "@/components/PostsList";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Create your post",
  description: "you can see all your post",
};

const Posts = async () => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const response = await fetch(
    `https://dummyjson.com/posts?limit=${randomNumber}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );
  const data = await response.json();

  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-5xl font-semibold mb-7">All posts</h1>

      <PostsList posts={data.posts} />
    </main>
  );
};

export default Posts;
