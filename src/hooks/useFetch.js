import { useEffect, useState } from 'react'


export function useFetch(id) {
  const BASE_CHARACTER_URL = `https://rickandmortyapi.com/api/character/`

  const [apiDataResponse, setApiDataResponse] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  // Get data from LocalStorage if exist || Obter dados do LocalStorage, se existir
  const allCharactersLocalStorage = localStorage.getItem("allCharacters")
  const allCharacters = allCharactersLocalStorage ? JSON.parse(allCharactersLocalStorage) : apiDataResponse;

  //API CALL
  const callAPI = async () => {
    try {
      const response = await fetch(`${BASE_CHARACTER_URL + id}`)
      if (!response.ok)
        throw new Error(
          `Something went wrong: ${response.status} ${response.statusText}`
        )
      const data = await response.json()
      setApiDataResponse(data)
      setIsLoading(false)

      // Saving data to localStorage || Salvando dados ao LocalStorage
      localStorage.setItem("allCharacters", JSON.stringify(data))

    } catch (err) {
      setErrorMessage(err.message)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (!allCharactersLocalStorage) {
      callAPI()
    } else {
      setIsLoading(false)
    }
  }, [])

  return { allCharacters, errorMessage, isLoading }
}