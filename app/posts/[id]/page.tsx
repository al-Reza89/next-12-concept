import type { Metadata } from "next";
import React from "react";
import NotFound from "./not-found";

type postpageProps = {
  params: {
    id: string;
  };
};

const PostPage = async ({ params }: postpageProps) => {
  const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const post = await response.json();

  if (!post.title) {
    return <NotFound />;
  }

  return (
    <main className="px-7 pt-24 text-center">
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
    </main>
  );
};

export default PostPage;

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined | null };
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const id = params.id;

  const response = await fetch(`https://dummyjson.com/posts/${params.id}`).then(
    (res) => res.json()
  );

  return {
    title: response?.title,
    description: response?.body,
  };
}
