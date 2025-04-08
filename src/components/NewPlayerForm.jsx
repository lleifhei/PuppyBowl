import { useState } from 'react'


export default function NewPlayerForm() {
  const [name, setName] = useState('')
  
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        autoComplete='on'
        placeholder="Enter player's name"
        required
      />
      <button type="submit" onSubmit={
        () => {
          console.log("Name: ", name)
        }
      }>Add Player</button>
    </form>
  )
}
  