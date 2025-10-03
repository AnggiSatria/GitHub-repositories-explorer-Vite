import type { GitHubUser } from "../interface/user.interface";

export async function fetchUsers(query: string): Promise<GitHubUser[]> {
  if (!query) return [];
  const res = await fetch(
    `https://api.github.com/search/users?q=${query}&per_page=5`
  );
  if (!res.ok) throw new Error("Failed to fetch users");
  const data = await res.json();
  return data.items || [];
}
