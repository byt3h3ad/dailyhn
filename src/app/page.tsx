"use client";

import { Stories } from "@/components/Stories";
import { useGetToday } from "@/hooks/useGetToday";

export default function Home() {
  const { data, isLoading, isError } = useGetToday();
  return (
    <>
      <h1 className="text-3xl font-bold">{data.heading}</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong</p>}
      <Stories data={data.links} />
    </>
  );
}
