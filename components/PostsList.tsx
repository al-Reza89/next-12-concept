import prisma from "@/lib/db";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SubPostList from "./SubPostList";

interface postslistProps {}

// @ts-ignore
const PostsList: React.FC<postslistProps> = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const posts = await prisma?.post.findMany();

  return (
    <>
      <ul>
        <SubPostList posts={posts} />
      </ul>
    </>
  );
};

export default PostsList;
