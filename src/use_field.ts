import { useState, useCallback } from 'react'

export function useTextField(
  initialValue?: string
): [
  string | undefined,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  React.Dispatch<React.SetStateAction<string | undefined>>
] {
  const [val, setVal] = useState(initialValue)
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value)
  }, [])

  return [val, onChange, setVal]
}

export function useNumberField(
  type: 'int' | 'float',
  initialValue: number
): [
  number,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  React.Dispatch<React.SetStateAction<number>>
] {
  const [val, setVal] = useState(initialValue)
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'int') {
      setVal(parseInt(e.target.value))
    } else {
      setVal(parseFloat(e.target.value))
    }
  }, [])

  return [val, onChange, setVal]
}

export function useSelectField<T>(
  initialValue?: T
): [
  T | undefined,
  (e: React.ChangeEvent<{ value: unknown }>) => void,
  React.Dispatch<React.SetStateAction<T | undefined>>
] {
  const [val, setVal] = useState(initialValue)
  const onChange = useCallback((e: React.ChangeEvent<{ value: unknown }>) => {
    setVal(e.target.value as T)
  }, [])

  return [val, onChange, setVal]
}

export function useCheckboxField(
  initialValue?: boolean
): [
  boolean,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  React.Dispatch<React.SetStateAction<boolean>>
] {
  const [val, setVal] = useState<boolean>(
    initialValue !== undefined ? initialValue : false
  )
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.checked)
  }, [])

  return [val, onChange, setVal]
}
