  import React, { useState } from 'react'

  type SearchProps = {
    borderColor: string
  }

  const Search: React.FC<SearchProps> = ({ borderColor }) => {
    const [searchTerm, setSearchTerm] = useState<string>('')

    const handleSearch = (e: React.FormEvent) => {
      e.preventDefault()
      window.open(`https://www.google.com/search?q=${searchTerm}`, '_blank')
    }

    return (
      <form
        onSubmit={handleSearch}
        className="flex justify-between border-1 border-solid rounded-none items-center h-1"
        style={{ borderWidth: '2px', borderColor }}
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Google search..."
          className="flex py-2 w-[100%] outline-none border-none bg-transparent"
          style={{
            paddingLeft: '0.5rem',
            height: '1.8rem',
            fontSize: '0.9rem',
          }}
          autoComplete="off"
        />
        <button
          type="submit"
          className="p-2 bg-transparent border-none cursor-pointer ml-2"
          style={{ marginRight: '0.4rem' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="text-[var(--icon-color)]"
          >
            <path d="M21 21l-4.35-4.35M17.65 12A5.65 5.65 0 1 1 12 6.35 5.65 5.65 0 0 1 17.65 12Z" />
          </svg>
        </button>
      </form>
    )
  }

  export default Search
