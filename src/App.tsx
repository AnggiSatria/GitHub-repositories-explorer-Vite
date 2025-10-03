import { useSearchParams } from "react-router-dom";
import SearchLayout from "./packages/ui/components/layout/HTMLSearchBarForm";
import { useGetUserGitHub } from "./packages/service/get-users/hooks";

export default function App() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const { data: users = [], isLoading, isError } = useGetUserGitHub({ query });

  return (
    <div className="w-full min-h-screen flex bg-gray-200 justify-center items-center">
      <div className="flex w-[350px] min-h-[500px] bg-white rounded shadow">
        {isLoading ? (
          <p className="p-4">Loading...</p>
        ) : isError ? (
          <p className="p-4 text-red-500">Error fetching users</p>
        ) : (
          <SearchLayout query={query} users={users} />
        )}
      </div>
    </div>
  );
}
