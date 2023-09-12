// AutoComplete.tsx
import React, { useState } from "react";

interface AutoCompleteProps {
  suggestions: string[];
}

const AutoComplete: React.FC<AutoCompleteProps> = ({ suggestions }) => {
  const [query, setQuery] = useState<string>("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setQuery(inputValue);

    // Filter suggestions based on the input value
    const filtered = inputValue
      ? suggestions.filter((suggestion) =>
          suggestion.trim().toLowerCase().includes(inputValue.toLowerCase())
        )
      : [];

    setFilteredSuggestions(filtered);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>)=> {
    setQuery(e.target.value);
    console.log(e);

  };

  return (
    <div className="auto-complete">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <ul>
        {filteredSuggestions.map((suggestion, index) => (
          <li onClick={() =>handleSelect} key={index}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AutoComplete;
