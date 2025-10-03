// // import UserCard from "../atoms/UserCard";

// // interface GitHubUser {
// //   login: string;
// //   id: number;
// //   avatar_url: string;
// //   html_url: string;
// // }

// // interface UserListProps {
// //   users: GitHubUser[];
// // }

// // export default function UserList({ users }: UserListProps) {
// //   if (!users || users.length === 0) {
// //     return <p className="text-gray-500">No users found</p>;
// //   }

// //   return (
// //     <div className="space-y-3">
// //       {users.map((user) => (
// //         <UserCard
// //           key={user.id}
// //           login={user.login}
// //           avatar_url={user.avatar_url}
// //           html_url={user.html_url}
// //         />
// //       ))}
// //     </div>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import UserCard from "../atoms/UserCard";

// interface GitHubUser {
//   login: string;
//   id: number;
//   avatar_url: string;
//   html_url: string;
// }

// interface Repo {
//   id: number;
//   name: string;
//   html_url: string;
// }

// interface UserListProps {
//   users: GitHubUser[];
// }

// export default function UserList({ users }: UserListProps) {
//   const [openUser, setOpenUser] = useState<string | null>(null);
//   const [repos, setRepos] = useState<Record<string, Repo[]>>({});
//   const [loading, setLoading] = useState<string | null>(null);

//   const toggleAccordion = async (login: string) => {
//     if (openUser === login) {
//       setOpenUser(null);
//       return;
//     }

//     setOpenUser(login);

//     if (!repos[login]) {
//       setLoading(login);
//       try {
//         const res = await fetch(`https://api.github.com/users/${login}/repos`);
//         if (res.ok) {
//           const data = await res.json();
//           setRepos((prev) => ({ ...prev, [login]: data }));
//         }
//       } catch (err) {
//         console.error("Failed to fetch repos:", err);
//       } finally {
//         setLoading(null);
//       }
//     }
//   };

//   if (!users || users.length === 0) {
//     return <p className="text-gray-500">No users found</p>;
//   }

//   return (
//     <div className="space-y-3">
//       {users.map((user) => (
//         <div key={user.id} className="border rounded">
//           <button
//             onClick={() => toggleAccordion(user.login)}
//             className="w-full text-left"
//           >
//             <UserCard
//               login={user.login}
//               avatar_url={user.avatar_url}
//               html_url={user.html_url}
//             />
//           </button>

//           {openUser === user.login && (
//             <div className="p-3 border-t bg-gray-50">
//               {loading === user.login ? (
//                 <p className="text-gray-500">Loading repos...</p>
//               ) : repos[user.login] && repos[user.login].length > 0 ? (
//                 <ul className="list-disc list-inside space-y-1">
//                   {repos[user.login].map((repo) => (
//                     <li key={repo.id}>
//                       <a
//                         href={repo.html_url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-600 hover:underline"
//                       >
//                         {repo.name}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p className="text-gray-500">No repos found</p>
//               )}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

import UserAccordion from "../molecules/UserAccordion";

interface GitHubUser {
  login: string;
  id: number;
}

interface UserListProps {
  users: GitHubUser[];
}

export default function UserList({ users }: UserListProps) {
  if (!users || users.length === 0) {
    return <p className="text-gray-500">No users found</p>;
  }

  return (
    <div className="space-y-3">
      {users.map((user) => (
        <UserAccordion key={user.id} login={user.login} />
      ))}
    </div>
  );
}
