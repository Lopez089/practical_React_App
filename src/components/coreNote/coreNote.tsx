import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { initialTask } from '../../features/tasks/taksSlice'
import { stateInitial } from '../../constant/index'

export const CoreNote = () => {
  const dispatch = useDispatch()
  const notes = useSelector((state: RootState) => state.tasks)

  useEffect(() => {
    dispatch(initialTask(stateInitial))
  }, [])

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
