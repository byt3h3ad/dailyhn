/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";

type UseQueryArgs<T> = {
  queryKey: string;
  queryFn: () => Promise<T>;
  initialData: T;
};

export const useQuery = <T,>({
  queryFn,
  queryKey,
  initialData,
}: UseQueryArgs<T>) => {
  const [data, setData] = useState<T>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await queryFn();
        setData(result);
      } catch (error) {
        console.error(error);
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
    return () => {
      didCancel = true;
    };
  }, [...queryKey]);

  return { data, isLoading, isError };
};
