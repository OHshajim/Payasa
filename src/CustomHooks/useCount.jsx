import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useCount = (url) => {
  const axiosSecure = useAxios();
  const { data: count = [] } = useQuery({
    queryKey: ["count", url],
    queryFn: async () => {
      const res = await axiosSecure.get(url);
      return res.data;
    },
  });
  return { count };
};

export default useCount;
