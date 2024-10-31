"use client";

import { Stories } from "@/components/Stories";
import { useGetDate } from "@/hooks/useGetDate";

export default function Page({ params }: { params: { slug: string } }) {
  const { data, isLoading, isError } = useGetDate(params.slug);
  return (
    <div>
      <h1 className="text-3xl font-bold">{data.heading}</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong</p>}
      <Stories data={data.links} />
    </div>
  );
}
