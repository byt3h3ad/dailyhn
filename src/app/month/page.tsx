"use client";

import { Stories } from "@/components/Stories";
import { useGetThisMonth } from "@/hooks/useGetThisMonth";

export default function Page() {
  const { data, isLoading, isError } = useGetThisMonth();
  return (
    <>
      <h1 className="text-3xl font-bold">{data.heading}</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong</p>}
      <Stories data={data.links} />
    </>
  );
}
