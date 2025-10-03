import { useState } from "react";

interface Repo {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
  html_url: string;
}

interface UserAccordionProps {
  login: string;
}

export default function UserAccordion({ login }: UserAccordionProps) {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleAccordion = async () => {
    if (!open && repos.length === 0) {
      setLoading(true);
      try {
        const res = await fetch(`https://api.github.com/users/${login}/repos`);
        const data = await res.json();
        setRepos(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    setOpen(!open);
  };

  return (
    <div className="rounded">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center p-3 bg-gray-100"
      >
        <span className="font-medium">{login}</span>
        <span>{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="pl-3 pt-3 pb-3 space-y-2 bg-gray-50">
          {loading && <p className="text-gray-500">Loading repos...</p>}
          {!loading &&
            repos.map((repo) => (
              <div
                key={repo.id}
                className="border rounded p-2 bg-white flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold">{repo.name}</p>
                  <p className="text-sm text-gray-500">{repo.description}</p>
                </div>
                <div className="flex items-center gap-1">
                  <span>{repo.stargazers_count}</span>
                  <span>⭐</span>
                </div>
              </div>
            ))}
          {!loading && repos.length === 0 && (
            <p className="text-gray-400">No repos found</p>
          )}
        </div>
      )}
    </div>
  );
}
