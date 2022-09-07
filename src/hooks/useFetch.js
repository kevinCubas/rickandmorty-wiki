import { useCallback, useEffect, useState } from 'react'


export const useFetch = (id) => {
  const BASE_CHARACTER_URL = `https://rickandmortyapi.com/api/character/`

  const [apiDataResponse, setApiDataResponse] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  //API CALL
  const callAPI = useCallback(async () => {
    try {
      const response = await fetch(`${BASE_CHARACTER_URL + id}`)
      if (!response.ok)
        throw new Error(
          `Something went wrong: ${response.status} ${response.statusText}`
        )
      const data = await response.json()
      setApiDataResponse(data)
      setIsLoading(false)
    } catch (err) {
      setErrorMessage(err.message)
      setIsLoading(false)
    }
  }, [id])

  useEffect(() => {
    callAPI()
  }, [])

  return { apiDataResponse, errorMessage, isLoading }
}