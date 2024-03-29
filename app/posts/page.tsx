// server component amar jodi kono heavy weight import library thake taile ami eita server e run korte parbo client e run korbo na .

import PostsList from "@/components/PostsList";
import prisma from "@/lib/db";
import { Metadata } from "next";
import React, { Suspense } from "react";
import AddPostForm from "@/components/AddPostForm";

export const metadata: Metadata = {
  title: "Create your post",
  description: "you can see all your post",
};

const Posts = async () => {
  return (
    <main className="text-center pt-16 px-5">
      <AddPostForm />
      <h1 className="text-5xl font-semibold mb-7">All posts</h1>

      <Suspense fallback="loading...">
        <PostsList />
      </Suspense>
    </main>
  );
};

export default Posts;
