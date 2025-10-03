import SearchBar from "../molecules/SearchBar";
import UserList from "../organism/UserList";

interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
}

export default function SearchLayout({
  query,
  users,
}: {
  query: string;
  users: GitHubUser[];
}) {
  return (
    <div className="p-6 max-w-2xl mx-auto w-full">
      <SearchBar defaultValue={query} />
      <UserList users={users} />
    </div>
  );
}
