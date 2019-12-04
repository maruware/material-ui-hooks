import { useState, useCallback } from 'react'

export const useOpen = (): [boolean, () => void, () => void] => {
  const [open, setOpen] = useState(false)

  const handleOpen = useCallback(() => {
    setOpen(true)
  }, [])
  const handleClose = useCallback(() => {
    setOpen(false)
  }, [])

  return [open, handleOpen, handleClose]
}
