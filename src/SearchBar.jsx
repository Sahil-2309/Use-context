import React, { useState } from 'react'

const SearchBar = ({ data }) => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const handlechange = (e) => {
    setSearch(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (data) {
      setResults(data.filter((item) => item.includes(search)))
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={search}
          onChange={handlechange}
          type='text'
          placeholder='hello'
        ></input>
      </form>
      <ul>
        {results.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  )
}

export default SearchBar
