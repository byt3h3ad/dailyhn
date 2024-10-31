import { useQuery } from "@/hooks/useQuery";
import { DAY_ENDPOINT } from "@/utils/constants";
import { Data } from "@/utils/types";
import axios from "axios";

export const useGetToday = () => {
  const { data, isLoading, isError } = useQuery<Data>({
    queryKey: "today",
    queryFn: async () => {
      const result = await axios(DAY_ENDPOINT);
      return { heading: result.data.heading, links: result.data.links };
    },
    initialData: { heading: "", links: [] },
  });
  return { data, isLoading, isError };
};
