import { useState, useCallback } from 'react'

export const useOpen = (
  initialValue = false
): [boolean, () => void, () => void] => {
  const [open, setOpen] = useState(initialValue)

  const handleOpen = useCallback(() => {
    setOpen(true)
  }, [])
  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  return [open, handleOpen, handleClose]
}
