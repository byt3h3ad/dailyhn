import { useQuery } from "@/hooks/useQuery";
import { DAY_ENDPOINT } from "@/utils/constants";
import { Data } from "@/utils/types";
import axios from "axios";

export const useGetDate = (date: string) => {
  const { data, isLoading, isError } = useQuery<Data>({
    queryKey: "date",
    queryFn: async () => {
      const result = await axios(DAY_ENDPOINT + date);
      return { heading: result.data.heading, links: result.data.links };
    },
    initialData: { heading: "", links: [] },
  });
  return { data, isLoading, isError };
};
