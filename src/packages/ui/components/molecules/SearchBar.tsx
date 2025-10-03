import { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { X } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom"; // pastikan react-router-dom

interface SearchBarProps {
  defaultValue?: string;
}

export default function SearchBar({ defaultValue = "" }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState(defaultValue);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      navigate("/");
      return;
    }
    setSearchParams({ q: searchTerm }); // update query param
  };

  const handleClear = () => {
    setSearchTerm("");
    navigate("/");
  };

  return (
    <div className="flex gap-2 mb-4 flex-col">
      <div className="relative bg-gray-300 rounded">
        <Input
          type="text"
          placeholder="Search GitHub username..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="pr-8 focus:outline-none focus:ring-0"
        />

        <button
          type="button"
          onClick={handleClear}
          className="absolute inset-y-0 right-2 flex items-center bg-transparent hover:text-gray-600 cursor-pointer disabled:cursor"
          disabled={!searchTerm}
        >
          <X size={16} className="text-black" />
        </button>
      </div>

      <Button onClick={handleSearch} disabled={!searchTerm}>
        Search
      </Button>

      {searchParams.get("q") && (
        <p>{`Showing users for "${searchParams.get("q")}"`}</p>
      )}
    </div>
  );
}
