import React from 'react'
import { useSelector } from 'react-redux'

export const CoreNote = () => {
  const notes = useSelector((state: RootState) => state.tasks)
  return (
    <>
      {
        notes.map((note) => (
          <div key={note.id}>
            <h2>{note.task}</h2>
          </div>
        )
        )
      }
    </>

  )
}
