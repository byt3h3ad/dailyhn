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
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await queryFn();
        if (!didCancel) {
          setData(result);
        }
      } catch (err) {
        if (!didCancel) {
          setIsError(true);
          setError(err);
          console.error(err);
        }
      }
      setIsLoading(false);
    };
    fetchData();
    return () => {
      didCancel = true;
    };
  }, [...queryKey]);

  return { data, isLoading, isError, error };
};
