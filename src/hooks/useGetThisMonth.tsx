import { useQuery } from "@/hooks/useQuery";
import { MONTH_ENDPOINT } from "@/utils/constants";
import { Data } from "@/utils/types";
import axios from "axios";

export const useGetThisMonth = () => {
  const { data, isLoading, isError } = useQuery<Data>({
    queryKey: "this_month",
    queryFn: async () => {
      const result = await axios(MONTH_ENDPOINT);
      return { heading: result.data.heading, links: result.data.links };
    },
    initialData: { heading: "", links: [] },
  });
  return { data, isLoading, isError };
};
