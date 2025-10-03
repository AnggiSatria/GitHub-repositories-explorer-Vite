interface UserCardProps {
  login: string;
  avatar_url: string;
  html_url: string;
}

export default function UserCard({
  login,
  avatar_url,
  html_url,
}: UserCardProps) {
  return (
    <div className="flex items-center gap-3 bg-gray-100 p-3 rounded borer-none">
      <img src={avatar_url} alt={login} className="w-10 h-10 rounded-full" />
      <a
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-blue-600"
      >
        {login}
      </a>
    </div>
  );
}
