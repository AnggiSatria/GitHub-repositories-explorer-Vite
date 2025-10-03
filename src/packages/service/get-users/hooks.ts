import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "./fetcher";

export const useGetUserGitHub = ({ query }: { query: string | any }) => {
  return useQuery({
    queryKey: ["github-users", query],
    queryFn: () => fetchUsers(query),
    enabled: !!query,
  });
};
