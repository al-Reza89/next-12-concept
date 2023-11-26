// server component amar jodi kono heavy weight import library thake taile ami eita server e run korte parbo client e run korbo na .

import PostsList from "@/components/PostsList";
import prisma from "@/lib/db";
import { Metadata } from "next";
import React from "react";
import NotFound from "./[id]/not-found";

export const metadata: Metadata = {
  title: "Create your post",
  description: "you can see all your post",
};

const Posts = async () => {
  try {
    const posts = await prisma.post.findMany();

    return (
      <main className="text-center pt-16 px-5">
        <h1 className="text-5xl font-semibold mb-7">All posts</h1>

        <PostsList posts={posts} />
      </main>
    );
  } catch (error) {
    return <NotFound />;
  }
};

export default Posts;
