import React from "react";
import { z } from "zod";

const searchParamsSchema = z.object({
  id: z.coerce.number(),
  color: z.enum(["red", "blue", "green"]),
});

const Home = ({
  searchParams,
}: {
  searchParams: {
    // it's gonna object with string as a key and string or string array as a value
    [key: string]: string | string[] | undefined;
  };
}) => {
  // searchParamsSchema.safeParse(searchParams) will give me an object with id and color
  const parsedSearchParams = searchParamsSchema.safeParse(searchParams);
  console.log(searchParams);

  // if the validation fails
  if (!parsedSearchParams.success) {
    return <div>Invalid search params</div>;
  }

  // if the validation succeeds
  console.log(parsedSearchParams.data);

  return <div>Home</div>;
};

export default Home;
