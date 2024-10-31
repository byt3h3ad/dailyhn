import { useQuery } from "@/hooks/useQuery";
import { MONTH_ENDPOINT } from "@/utils/constants";
import { Data } from "@/utils/types";
import axios from "axios";

export const useGetMonth = (date: string) => {
  const { data, isLoading, isError } = useQuery<Data>({
    queryKey: "date",
    queryFn: async () => {
      const result = await axios(MONTH_ENDPOINT + date);
      return { heading: result.data.heading, links: result.data.links };
    },
    initialData: { heading: "", links: [] },
  });
  return { data, isLoading, isError };
};
