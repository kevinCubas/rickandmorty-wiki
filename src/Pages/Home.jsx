import { allCharactersID } from "../allCharactersID"
import { CharacterContainer } from "../components/CharactersContainer"
import { PageTitle } from "../components/PageTitle"
import { useFetch } from "../hooks/useFetch"

export const Home = () => {
  const { apiDataResponse, isLoading, errorMessage } = useFetch(allCharactersID)
  
  // Saving data to localStorage || Salvando dados ao LocalStorage
  localStorage.setItem("allCharacters", JSON.stringify(apiDataResponse))
  
  // Get data from LocalStorage if exist || Obter dados do LocalStorage, se existir
  const allCharactersLocalStorage = localStorage.getItem("allCharacters")
  const allCharacters = allCharactersLocalStorage ? JSON.parse(allCharactersLocalStorage) : apiDataResponse;
  
  return (
    <>
      <PageTitle />
      <CharacterContainer allCharacters={allCharacters} />
      {errorMessage && <h2 style={{ display: "flex", justifyContent: "center" }}>{errorMessage}</h2>}
      {isLoading && <h1 style={{ display: "flex", justifyContent: "center" }}>Loading...</h1>}
    </>
  )
}