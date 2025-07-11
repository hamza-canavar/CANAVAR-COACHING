import { useState, useEffect } from 'react'

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

export function useThrottle(callback, delay) {
  const [isThrottled, setIsThrottled] = useState(false)

  const throttledCallback = (...args) => {
    if (!isThrottled) {
      callback(...args)
      setIsThrottled(true)
      setTimeout(() => setIsThrottled(false), delay)
    }
  }

  return throttledCallback
}

