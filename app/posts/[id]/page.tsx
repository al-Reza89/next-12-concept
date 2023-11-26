import type { Metadata } from "next";
import React from "react";

const PostPage = () => {
  return <div>PostPage</div>;
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

  const product = await fetch(`https://dummyjson.com/posts/${params.id}`).then(
    (res) => res.json()
  );

  return {
    title: product.title,
    description: "this is individual product desc",
  };
}
